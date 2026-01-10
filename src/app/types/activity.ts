export type Activity = {
  id: number;
  name: string;
  type: string;
  equipment: string[];
  time: number | string;
  setup: boolean;
  tags: string[];
  youtubeLink?: string;
  warning?: string[]; // make sure this matches the JSON field
  lastDone?: Date; // optional
};

// Export the activities array
export const activities: Activity[] = [
  {
    id: 1,
    name: "Dodgeball",
    type: "Game",
    equipment: ["balls", "cones", "chairs"],
    time: 30,
    setup: true,
    tags: ["indoor", "large group"],
  },
  {
    id: 2,
    name: "Pancake Evening",
    type: "Food-Craft",
    equipment: ["pans", "ingredients"],
    time: 60,
    setup: true,
    tags: ["kitchen", "small group"],
  },
  {
    id: 3,
    name: "Relay Race",
    type: "Game",
    equipment: ["batons", "cones"],
    time: 20,
    setup: true,
    tags: ["outdoor", "medium group"],
  },
  {
    id: 4,
    name: "Cupcake Decorating",
    type: "Food-Craft",
    equipment: ["cupcakes", "icing"],
    time: 45,
    setup: false,
    tags: ["indoor", "small group"],
  },
  {
    id: 5,
    name: "Noodle and Cup Game",
    type: "Game",
    equipment: ["plastic cups", "foam noodles"],
    time: 2,
    setup: false,
    tags: ["indoor", "small group", "individuals", "short rounds"],
    warning: ["potential violence"],
    youtubeLink: "https://www.youtube.com/shorts/qXGiS4lP8LA",
  },
  {
    id: 6,
    name: "Hockey Partners",
    type: "Game",
    equipment: ["hockey sticks", "small ball"],
    time: 2,
    setup: false,
    tags: ["indoor", "small group", "individuals", "short rounds"],
    warning: ["potential violence"],
    lastDone: new Date("2026-01-09")
  },
  {
    id:7,
    name: "Football",
    type: "Game",
    equipment: ["ball", "chairs"],
    setup:false,
    tags: ["outdoor"],
    time:"15-60",    
  }
];
