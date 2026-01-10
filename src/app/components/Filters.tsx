import React, { useState } from "react";

type FiltersProps = {
  activities: any[];
  typeFilter: string[];
  setTypeFilter: (val: string[]) => void;
  equipmentFilter: string[];
  setEquipmentFilter: (val: string[]) => void;
  setupFilter: string[];
  setSetupFilter: (val: string[]) => void;
  search: string;
  setSearch: (val: string) => void;
};

export default function Filters({
  activities,
  typeFilter,
  setTypeFilter,
  equipmentFilter,
  setEquipmentFilter,
  setupFilter,
  setSetupFilter,
  search,
  setSearch,
}: FiltersProps) {
    const filtersOpen = false;
  const [typeOpen, setTypeOpen] = useState(filtersOpen);
  const [equipmentOpen, setEquipmentOpen] = useState(filtersOpen);
  const [setupOpen, setSetupOpen] = useState(filtersOpen);

  const allEquipment = Array.from(new Set(activities.flatMap((a) => a.equipment)));
  const allTypes = Array.from(new Set(activities.map((a) => a.type)));
  const setupOptions = ["true", "false"];

  const toggleFilter = (filter: string[], setFilter: any, value: string) => {
    if (filter.includes(value)) {
      setFilter(filter.filter((v) => v !== value));
    } else {
      setFilter([...filter, value]);
    }
  };

  return (
    <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {/* Search */}
      <div className="col-span-1 sm:col-span-3 mb-4">
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
        <button
          className="w-full text-left font-semibold border-b pb-1 mb-2"
          onClick={() => setTypeOpen(!typeOpen)}
        >
          Type {typeOpen ? "▲" : "▼"}
        </button>
        {typeOpen && (
          <div className="grid grid-cols-1 gap-1">
            {allTypes.map((t) => (
              <label key={t} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={typeFilter.includes(t)}
                  onChange={() => toggleFilter(typeFilter, setTypeFilter, t)}
                />
                <span>{t}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Equipment Filter */}
      <div>
        <button
          className="w-full text-left font-semibold border-b pb-1 mb-2"
          onClick={() => setEquipmentOpen(!equipmentOpen)}
        >
          Equipment {equipmentOpen ? "▲" : "▼"}
        </button>
        {equipmentOpen && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {allEquipment.map((eq) => (
              <label key={eq} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={equipmentFilter.includes(eq)}
                  onChange={() => toggleFilter(equipmentFilter, setEquipmentFilter, eq)}
                />
                <span>{eq}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Setup Filter */}
      <div>
        <button
          className="w-full text-left font-semibold border-b pb-1 mb-2"
          onClick={() => setSetupOpen(!setupOpen)}
        >
          Setup {setupOpen ? "▲" : "▼"}
        </button>
        {setupOpen && (
          <div className="grid grid-cols-1 gap-1">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={setupFilter.includes("true")}
                onChange={() => toggleFilter(setupFilter, setSetupFilter, "true")}
              />
              <span>Requires Setup</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={setupFilter.includes("false")}
                onChange={() => toggleFilter(setupFilter, setSetupFilter, "false")}
              />
              <span>No Setup</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
