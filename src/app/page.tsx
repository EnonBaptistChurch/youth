"use client";

import { useState } from "react";
import { Activity, SetupLevel } from "@/app/types/activity";
import { activities as allActivities } from "@/app/data/activityItems";
import Filters from "./components/Filters";
import ActivityCard from "./components/ActivityCard";

export default function HomePage() {
  const [activities, setActivities] = useState<Activity[]>(allActivities);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [videoActivity, setVideoActivity] = useState<Activity | null>(null);
  const [originalOrder] = useState<Activity[]>(allActivities);

  // Filters state
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const [equipmentFilter, setEquipmentFilter] = useState<string[]>([]);
  const [setupFilter, setSetupFilter] = useState<SetupLevel[]>([]);
  const [tagFilter, setTagFilter] = useState<string[]>([]);

  const handleCardClick = (activity: Activity) => {
    if(activity.id == selectedId) {
      setSelectedId(null);
      return;
    }
    setSelectedId(activity.id);
    setVideoActivity(activity);

    const rest = originalOrder.filter((a) => a.id !== activity.id);
    setActivities([activity, ...rest]);
  };

  const filtered = activities.filter((a) => {
    return (
      a.name.toLowerCase().includes(search.toLowerCase()) &&
      (typeFilter.length === 0 || typeFilter.includes(a.type)) &&
      (equipmentFilter.length === 0 || (a.equipment && a.equipment.some((eq) => equipmentFilter.includes(eq)))) &&
      (setupFilter.length === 0 || setupFilter.includes(a.setup)) &&
      (tagFilter.length === 0 || a.tags.some((tag) => tagFilter.includes(tag)))
    );
  });

  const filteredAndSorted = [...filtered].sort((a, b) => {
    if (a.id === selectedId) return -1;
    if (b.id === selectedId) return 1;

    if (a.lastDone && b.lastDone) return b.lastDone.getTime() - a.lastDone.getTime();
    if (a.lastDone) return -1;
    if (b.lastDone) return 1;
    return a.id - b.id;
  });

  const getYouTubeId = (url?: string) => {
    if (!url) return null;
    const patterns = [/youtube\.com\/watch\?v=([\w-]{11})/, /youtu\.be\/([\w-]{11})/, /youtube\.com\/shorts\/([\w-]{11})/];
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const videoId = getYouTubeId(videoActivity?.youtubeLink);
  const currentDescription = videoActivity?.description;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Youth Activities</h1>

      <Filters
        activities={activities}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        equipmentFilter={equipmentFilter}
        setEquipmentFilter={setEquipmentFilter}
        setupFilter={setupFilter}
        setSetupFilter={setSetupFilter}
        tagFilter={tagFilter}
        setTagFilter={setTagFilter}
        search={search}
        setSearch={setSearch}
      />

      {videoId && (
        <div className="mb-6">
          <iframe
            width="100%"
            height="360"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={videoActivity?.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      )}
      {currentDescription && (
        <div className="mb-6">
          <div className="mt-6 bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-xl">
            <p className="text-xs md:text-xl font-medium leading-relaxed">
              {currentDescription}
            </p>
          </div>
        </div>
      )}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredAndSorted.map((a) => (
          <ActivityCard key={a.id} activity={a} isSelected={a.id === selectedId} toggleSelect={() => handleCardClick(a)} />
        ))}
      </ul>
    </div>
  );
}
