"use client"
import React from "react";
import { Activity } from "../types/activity";

interface ActivityCardProps {
  activity: Activity;
  isSelected: boolean;
  toggleSelect: () => void; // called by page
}

export default function ActivityCard({
  activity,
  isSelected,
  toggleSelect,
}: ActivityCardProps) {
  return (
    <li
      className={`border rounded-lg p-4 cursor-pointer transition
        ${isSelected ? "bg-blue-200 border-blue-400" : "bg-white hover:bg-gray-100"}`}
      onClick={toggleSelect}
    >
      <div className="flex items-center justify-between">
        <span className="font-semibold">{activity.name}</span>
        <span className="text-blue-600 font-bold">
            {activity.lastDone && (
                <div className="text-xs text-gray-500 mt-1">
                    Last done: {new Date(activity.lastDone).toLocaleDateString()}
                </div>
            )}
        </span>
      </div>
      <div className="text-sm text-gray-600 mt-1">
        Type: {activity.type} | Time: {activity.time} min |{" "}
        {activity.setup ? "Requires setup" : "No setup"}
      </div>
      <div className="text-xs text-gray-500 mt-1">
        Equipment: {activity.equipment.join(", ")}
      </div>
    </li>
  );
}
