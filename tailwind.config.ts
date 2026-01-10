import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/app/components/**/*.{ts,tsx}",  // Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;