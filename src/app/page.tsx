"use client";

import { useState } from "react";
import { Activity, activities as allActivities } from "./types/activity";
import Filters from "./components/Filters";
import ActivityCard from "./components/ActivityCard";

export default function HomePage() {
  const [activities, setActivities] = useState<Activity[]>(allActivities);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [videoActivity, setVideoActivity] = useState<Activity | null>(null);
  const [originalOrder] = useState<Activity[]>(allActivities); // preserve original order

  // Filters state
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const [equipmentFilter, setEquipmentFilter] = useState<string[]>([]);
  const [setupFilter, setSetupFilter] = useState<string[]>([]);

  const handleCardClick = (activity: Activity) => {
    setSelectedId(activity.id);
    setVideoActivity(activity);

    // Reorder: selected card at top, rest in original order
    const rest = originalOrder.filter((a) => a.id !== activity.id);
    setActivities([activity, ...rest]);
  };

  // Filtering logic
  const filtered = activities.filter((a) => {
    return (
      a.name.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter.length === 0 || typeFilter.includes(a.type)) &&
      (equipmentFilter.length === 0 || a.equipment.some((eq) => equipmentFilter.includes(eq))) &&
      (setupFilter.length === 0 || setupFilter.includes(a.setup ? "true" : "false"))
    );
  });

  const filteredAndSorted = [...filtered].sort((a, b) => {
  // Both have dates → newest first
  if (a.lastDone && b.lastDone) {
    const latestFirst = false;
    if(latestFirst)
    return b.lastDone.getTime() - a.lastDone.getTime();
    else
      return a.lastDone.getTime() - b.lastDone.getTime();
  }

  // Only one has a date → that one first
  if (a.lastDone) return -1;
  if (b.lastDone) return 1;

  // Neither has a date → fallback to id
  return a.id - b.id;
});

  // Extract YouTube video ID (supports watch, shorts, youtu.be)
  const getYouTubeId = (url?: string): string | null => {
    if (!url) return null;
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{11})/,
    ];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const videoId = getYouTubeId(videoActivity?.youtubeLink);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Youth Activities</h1>
      

      {/* Filters */}
      <Filters
        activities={activities}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        equipmentFilter={equipmentFilter}
        setEquipmentFilter={setEquipmentFilter}
        setupFilter={setupFilter}
        setSetupFilter={setSetupFilter}
        search={search}
        setSearch={setSearch}
      />

      {/* Video Area */}
      {videoId && (
        <div className="mb-6">
          <iframe
            width="100%"
            height="360"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={videoActivity?.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      )}

      {/* Activities Grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredAndSorted.map((a) => (
          <ActivityCard
            key={a.id}
            activity={a}
            isSelected={a.id === selectedId}
            toggleSelect={() => handleCardClick(a)}
          />
        ))}
      </ul>
    </div>
  );
}
