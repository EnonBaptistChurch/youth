"use client";

import { useState } from "react";

type ForfeitCategory =
  | "all"
  | "performance"
  | "embarrassing"
  | "brain"
  | "social"
  | "physical"
  | "practical";

interface Forfeit {
  id: number;
  text: string;
  category: Exclude<ForfeitCategory, "all">;
}
import { forfeits } from "../data/forfeits";
// const forfeits: Forfeit[] = [
//   { id: 1, text: "Speak in a posh accent for the next round.", category: "performance" },
//   { id: 2, text: "Act like a sports commentator for what’s happening in the room.", category: "performance" },
//   { id: 3, text: "Walk across the room in slow motion.", category: "performance" },

//   { id: 4, text: "Let the group give you a temporary nickname for the evening.", category: "embarrassing" },
//   { id: 5, text: "Wear a silly hat until the next round.", category: "embarrassing" },
//   { id: 6, text: "Speak only in questions for 1 minute.", category: "embarrassing" },

//   { id: 7, text: "Name the books of the Bible as far as you can in 20 seconds.", category: "brain" },
//   { id: 8, text: "Recite a Bible verse from memory.", category: "brain" },
//   { id: 9, text: "List the fruits of the Spirit.", category: "brain" },

//   { id: 10, text: "Give a 15-second pep talk to the group.", category: "social" },
//   { id: 11, text: "Tell a clean joke.", category: "social" },
//   { id: 12, text: "Share one thing you're thankful for.", category: "social" },

//   { id: 13, text: "Do 5 press-ups (or knee press-ups).", category: "physical" },
//   { id: 14, text: "Balance a book on your head for 30 seconds.", category: "physical" },
//   { id: 15, text: "Walk like a penguin for one round.", category: "physical" },

//   { id: 16, text: "Set up chairs next week.", category: "practical" },
//   { id: 17, text: "Tidy up at the end.", category: "practical" },
//   { id: 18, text: "Open in prayer next week.", category: "practical" },
// ];

export default function ForfeitsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<ForfeitCategory>("all");
  const [currentForfeit, setCurrentForfeit] = useState<Forfeit | null>(null);

  const generateForfeit = () => {
    const filtered =
      selectedCategory === "all"
        ? forfeits
        : forfeits.filter((f) => f.category === selectedCategory);

    if (filtered.length === 0) return;

    const randomIndex = Math.floor(Math.random() * filtered.length);
    setCurrentForfeit(filtered[randomIndex]);
  };

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-xl text-center space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">
          Youth Group Forfeit Generator
        </h1>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <select
            value={selectedCategory}
            onChange={(e) =>
              setSelectedCategory(e.target.value as ForfeitCategory)
            }
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="performance">Performance</option>
            <option value="embarrassing">Embarrassing</option>
            <option value="brain">Brain</option>
            <option value="social">Social</option>
            <option value="physical">Physical</option>
            <option value="practical">Practical</option>
          </select>

          <button
            onClick={generateForfeit}
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition rounded-lg px-6 py-2 font-semibold shadow-lg"
          >
            Generate
          </button>
        </div>

        {/* Card */}
        {currentForfeit && (
          <div className="mt-6 bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-xl">
            <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
              {currentForfeit.category}
            </p>
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              {currentForfeit.text}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
