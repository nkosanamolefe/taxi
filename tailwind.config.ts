import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#121212", // Background color in the image
        primary: "#007bff", // Button color
        textPrimary: "#ffffff", // Text color
      },
    },
  },
  plugins: [],
};
export default config;
