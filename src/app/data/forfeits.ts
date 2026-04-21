// forfeits.ts

export type ForfeitCategory =
  | "performance"
  | "embarrassing"
  | "brain"
  | "social"
  | "physical"
  | "practical";

export interface Forfeit {
  id: number;
  text: string;
  category: ForfeitCategory;
}

export const forfeits: Forfeit[] = [
  // 🎭 Performance
  { id: 1, text: "Speak in a posh accent for the next round.", category: "performance" },
  { id: 2, text: "Act like a sports commentator for what’s happening in the room.", category: "performance" },
  { id: 3, text: "Walk across the room in slow motion.", category: "performance" },
  { id: 4, text: "Narrate your own actions for 60 seconds.", category: "performance" },
  { id: 5, text: "Do your best animal impression.", category: "performance" },

  // 😂 Mildly Embarrassing
  { id: 6, text: "Let the group give you a temporary nickname for the evening.", category: "embarrassing" },
  { id: 7, text: "Wear a silly hat until the next round.", category: "embarrassing" },
  { id: 8, text: "Strike and hold a superhero pose.", category: "embarrassing" },
  { id: 9, text: "Compliment three different people enthusiastically.", category: "embarrassing" },
  { id: 10, text: "Speak only in questions for 1 minute.", category: "embarrassing" },

  // 🧠 Brain
  { id: 11, text: "Name the books of the Bible as far as you can in 20 seconds.", category: "brain" },
  { id: 12, text: "Recite a Bible verse from memory.", category: "brain" },
  { id: 13, text: "Name 5 Old Testament characters.", category: "brain" },
  { id: 14, text: "List the fruits of the Spirit.", category: "brain" },
  { id: 15, text: "Explain what grace means in 20 seconds.", category: "brain" },

  // 🤝 Social
  { id: 16, text: "Give a 15-second pep talk to the group.", category: "social" },
  { id: 17, text: "Tell a clean joke.", category: "social" },
  { id: 18, text: "Share one thing you're thankful for.", category: "social" },
  { id: 19, text: "Invent a secret handshake with someone.", category: "social" },
  { id: 20, text: "Introduce the person next to you like they’re a celebrity.", category: "social" },

  // 🏃 Physical
  { id: 21, text: "Do 5 press-ups (or knee press-ups).", category: "physical" },
  { id: 22, text: "Hop on one foot while answering a question.", category: "physical" },
  { id: 23, text: "Balance a book on your head for 30 seconds.", category: "physical" },
  { id: 24, text: "Do a plank for 20 seconds.", category: "physical" },
  { id: 25, text: "Walk like a penguin for one round.", category: "physical" },
];

// Optional helper functions

export function getRandomForfeit(): Forfeit {
  const index = Math.floor(Math.random() * forfeits.length);
  return forfeits[index];
}

export function getForfeitsByCategory(category: ForfeitCategory): Forfeit[] {
  return forfeits.filter(f => f.category === category);
}
