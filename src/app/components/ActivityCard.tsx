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
    <li
      className={`border rounded-lg p-4 cursor-pointer transition
        ${isSelected ? "bg-blue-200 text-black border-blue-400" : "bg-white dark:bg-black hover:bg-gray-100"}`}
      onClick={toggleSelect}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold">{activity.name}</span>

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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-full h-full">
                <path
                  d="M62.603 16.596a8.06 8.06 0 0 0-5.669-5.669C51.964 9.57 31.96 9.57 31.96 9.57s-20.005.04-24.976 1.397a8.06 8.06 0 0 0-5.669 5.669C0 21.607 0 32 0 32s0 10.393 1.356 15.404a8.06 8.06 0 0 0 5.669 5.669C11.995 54.43 32 54.43 32 54.43s20.005 0 24.976-1.356a8.06 8.06 0 0 0 5.669-5.669C64 42.434 64 32 64 32s-.04-10.393-1.397-15.404z"
                  fill="red"
                />
                <path d="M25.592 41.612L42.187 32l-16.596-9.612z" fill="#fff" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="text-sm text-gray-600 mt-1">
        Type: {activity.type} | Time: {activity.time} min
        {activity.rounds && activity.timePerRound ? ` (${activity.timePerRound} mins per round)` : ""} |{" "}
        {setupLabels[activity.setup]}
      </div>

      {activity.rounds && activity.timePerRound && (
        <div className="text-sm text-gray-600 mt-1">
          Rounds: Yes | Time per round: {activity.timePerRound} min
        </div>
      )}

      {activity.warning && activity.warning.length > 0 && (
        <div className="text-sm text-red-600 mt-1">⚠ Warning: {activity.warning.join(", ")}</div>
      )}

      <div className="text-xs text-gray-500 mt-1">Equipment: {activity.equipment.join(", ")}</div>
      <div className="text-xs text-gray-500 mt-1">Tags: {activity.tags.join(", ")}</div>
    </li>
  );
}
