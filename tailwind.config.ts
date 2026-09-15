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
        ink: {
          DEFAULT: "#0B1F33",
          mute: "#1A3348",
        },
        mist: "#E8EEF2",
        crisp: "#FAFBFC",
        cobalt: "#2F6FED",
        hairline: "#C5D0D8",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-newsreader)", "Georgia", "serif"],
      },
      boxShadow: {
        stub: "0 1px 0 rgba(11,31,51,0.06), 0 8px 24px rgba(11,31,51,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
