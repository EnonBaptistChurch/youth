"use client";
import { Activity, SetupLevel } from "../types/activity";
import YoutubeIcon from "../icons/youtube";
import { basePath } from "../../../modules/config";

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

export default function ActivityCard({activity, isSelected, toggleSelect,}: ActivityCardProps) {
  console.log(basePath);
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
      <span className={`font-semibold transition-colors 
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
            <YoutubeIcon link={activity.youtubeLink} />
          )}
        </div>
      </div>

      <div className="text-sm text-gray-600 mt-1">
        Type: {activity.type} | Time: {activity.time} min |{" "}
        {setupLabels[activity.setup]}
      </div>

      {activity.rounds && activity.timePerRound && (
        <div className="text-sm text-gray-600 mt-1">
          Rounds: {activity.rounds} | Time per round: {activity.timePerRound} min
        </div>
      )}

      {activity.warning && activity.warning.length > 0 && (
        <div className="text-sm text-red-600 mt-1">
          ⚠ Warning: {activity.warning.join(", ")}
        </div>
      )}
      
      {activity.tags && activity.tags.length > 0 && (
            <div className="text-xs text-gray-500 mt-1">
              Tags: {activity.tags.join(", ")}
            </div>
          )}
      {activity.equipment && activity.equipment.length > 0 && (
          <div className="text-xs text-gray-500 mt-1">
            Equipment: {activity.equipment.join(", ")}
          </div>
      )}
      {activity.internalLink && (
        <div className="text-md text-blue-600 mt-1">
          <a href={basePath + activity.internalLink} target="_blank" rel="noopener noreferrer">
            {activity.name} Details Page
          </a>
        </div>
      )}
    </li>
  );
}
