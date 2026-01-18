"use client";
import React, { useState } from "react";
import { Activity, SetupLevel } from "../types/activity";

interface FiltersProps {
  activities: Activity[];
  typeFilter: string[];
  setTypeFilter: (val: string[]) => void;
  equipmentFilter: string[];
  setEquipmentFilter: (val: string[]) => void;
  setupFilter: SetupLevel[];
  setSetupFilter: (val: SetupLevel[]) => void;
  tagFilter: string[];
  setTagFilter: (val: string[]) => void;
  search: string;
  setSearch: (val: string) => void;
}

export default function Filters({
  activities,
  typeFilter,
  setTypeFilter,
  equipmentFilter,
  setEquipmentFilter,
  setupFilter,
  setSetupFilter,
  tagFilter,
  setTagFilter,
  search,
  setSearch,
}: FiltersProps) {
  const [typeOpen, setTypeOpen] = useState(false);
  const [equipmentOpen, setEquipmentOpen] = useState(false);
  const [setupOpen, setSetupOpen] = useState(false);
  const [tagsOpen, setTagsOpen] = useState(false);

  const allEquipment = Array.from(new Set(activities.flatMap((a) => a.equipment ?? []))
);
  const allTypes = Array.from(new Set(activities.map((a) => a.type)));
  const setupOptions = [SetupLevel.None, SetupLevel.Minimal, SetupLevel.Full];
  const allTags = Array.from(new Set(activities.flatMap((a) => a.tags)));

  const toggleFilter = (filter: string[] | SetupLevel[], setFilter: any, value: string | SetupLevel) => {
    if (filter.includes(value as any)) {
      setFilter(filter.filter((v: any) => v !== value));
    } else {
      setFilter([...filter, value]);
    }
  };

  return (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Search */}
      <div className="col-span-1 sm:col-span-2 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
      </div>

      {/* Type Filter */}
      <div>
        <button className="w-full text-left font-semibold border-b pb-1 mb-2" onClick={() => setTypeOpen(!typeOpen)}>
          Type {typeOpen ? "▲" : "▼"}
        </button>
        {typeOpen && (
          <div className="grid grid-cols-1 gap-1">
            {allTypes.map((t) => (
              <label key={t} className="flex items-center space-x-2">
                <input type="checkbox" checked={typeFilter.includes(t)} onChange={() => toggleFilter(typeFilter, setTypeFilter, t)} />
                <span>{t}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Equipment Filter */}
      <div>
        <button className="w-full text-left font-semibold border-b pb-1 mb-2" onClick={() => setEquipmentOpen(!equipmentOpen)}>
          Equipment {equipmentOpen ? "▲" : "▼"}
        </button>
        {equipmentOpen && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {allEquipment.map((eq) => (
              
              <label key={eq} className="flex items-center space-x-2">
                <input type="checkbox" checked={equipmentFilter.includes(eq)} onChange={() => toggleFilter(equipmentFilter, setEquipmentFilter, eq)} />
                <span>{eq}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Setup Filter */}
      <div>
        <button className="w-full text-left font-semibold border-b pb-1 mb-2" onClick={() => setSetupOpen(!setupOpen)}>
          Setup {setupOpen ? "▲" : "▼"}
        </button>
        {setupOpen && (
          <div className="grid grid-cols-1 gap-1">
            {setupOptions.map((s) => (
              <label key={s} className="flex items-center space-x-2">
                <input type="checkbox" checked={setupFilter.includes(s)} onChange={() => toggleFilter(setupFilter, setSetupFilter, s)} />
                <span>{s}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Tags Filter */}
      <div>
        <button className="w-full text-left font-semibold border-b pb-1 mb-2" onClick={() => setTagsOpen(!tagsOpen)}>
          Tags {tagsOpen ? "▲" : "▼"}
        </button>
        {tagsOpen && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {allTags.map((tag) => (
              <label key={tag} className="flex items-center space-x-2">
                <input type="checkbox" checked={tagFilter.includes(tag)} onChange={() => toggleFilter(tagFilter, setTagFilter, tag)} />
                <span>{tag}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
