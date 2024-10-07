import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "up-and-down": "upAndDown 5s ease-in-out infinite alternate",
      },
      keyframes: {
        upAndDown: {
          "0%": { transform: "translate(-50%, -80%)" },
          "100%": { transform: "translate(-50%, -40%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "radial-gradient-sphere":
          "radial-gradient(circle at 10px 10px, #eabdb7, #f1c0bb, #efbebd, #e4a79f, #d2928a, #e0a098)",
        "radial-gradient-before":
          "radial-gradient(circle at 50% 120%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%)",
        "radial-gradient-after":
          "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%)",
      },
    },
  },
  plugins: [],
};
export default config;
