"use client";
import React from "react";
import { Activity, SetupLevel } from "../types/activity";

interface ActivityCardProps {
  activity: Activity;
  isSelected: boolean;
  toggleSelect: () => void;
}

const setupLabels: Record<SetupLevel, string> = {
  [SetupLevel.Full]: "Requires Full Setup",
  [SetupLevel.Minimal]: "Minimal Setup",
  [SetupLevel.None]: "No Setup",
};

export default function ActivityCard({
  activity,
  isSelected,
  toggleSelect,
}: ActivityCardProps) {
  return (
    <li className={`group border rounded-lg p-4 cursor-pointer transition
        ${
          isSelected
            ? "bg-blue-200 text-black border-blue-400"
            : "bg-white hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-200"
        }`}
      onClick={toggleSelect}
    >
  <div className="flex items-center justify-between">
    <span
  className={`font-semibold transition-colors
    ${
      isSelected
        ? "text-black"
        : "text-black dark:text-white dark:group-hover:text-black"
    }`}
>
  {activity.name}
</span>

    <div className="flex items-center gap-2">
      {activity.lastDone && (
        <span className="text-xs text-gray-500">
          Last done: {new Date(activity.lastDone).toLocaleDateString()}
        </span>
      )}
      {activity.youtubeLink && (
        <a
          href={activity.youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6"
          title="Watch on YouTube"
        >
          {/* svg icon */}
        </a>
      )}
    </div>
  </div>

  <div className="text-sm text-gray-600 mt-1">
    Type: {activity.type} | Time: {activity.time} min
    {activity.rounds && activity.timePerRound
      ? ` (${activity.timePerRound} mins per round)`
      : ""} |{" "}
    {setupLabels[activity.setup]}
  </div>

  {activity.rounds && activity.timePerRound && (
    <div className="text-sm text-gray-600 mt-1">
      Rounds: Yes | Time per round: {activity.timePerRound} min
    </div>
  )}

  {activity.warning && activity.warning.length > 0 && (
    <div className="text-sm text-red-600 mt-1">
      ⚠ Warning: {activity.warning.join(", ")}
    </div>
  )}

  <div className="text-xs text-gray-500 mt-1">
    Equipment: {activity.equipment.join(", ")}
  </div>
  <div className="text-xs text-gray-500 mt-1">
    Tags: {activity.tags.join(", ")}
  </div>
</li>
  );
}
