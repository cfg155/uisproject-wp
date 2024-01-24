import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#03497E",
      blue: "#0596D5",
      orange: "#FE4B28",
      grey: "#F8F8F8",
      "dark-grey": "#999999",
      white: "#fff",
    },
  },
  plugins: [],
};
export default config;
