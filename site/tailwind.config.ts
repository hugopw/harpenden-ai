import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // AI Optimist-inspired palette: optimistic daylight + trustworthy deep blue.
        ink: {
          DEFAULT: "#0B1220",
          soft: "#1A2133",
          muted: "#3A4258",
        },
        sun: {
          DEFAULT: "#FFB547",
          warm: "#FF8A3D",
          glow: "#FFD98A",
        },
        // AI Optimist primary brand accent (from brand audit of aioptimist.org)
        optimist: {
          DEFAULT: "#D6006D",
          deep: "#9E004F",
          soft: "#FFD4E8",
        },
        // AI Night School three-colourway architecture (sibling brand)
        midnight: {
          DEFAULT: "#191931",
          soft: "#26264A",
        },
        lavender: {
          DEFAULT: "#DCB8FE",
          soft: "#F1E1FE",
          deep: "#7C3AED",
        },
        lime: {
          DEFAULT: "#B4F863",
          deep: "#7AC93A",
          soft: "#E5FBC8",
        },
        // Sherpas gradient stops (sibling brand) - used sparingly on the
        // teen path only, never as a body palette.
        sherpas: {
          cyan: "#29ABE2",
          indigo: "#5B6BF5",
          violet: "#8B2FC9",
          pink: "#E91E8C",
        },
        sky: {
          DEFAULT: "#2563EB",
          deep: "#1E3A8A",
          mist: "#DBE6FF",
        },
        meadow: {
          DEFAULT: "#3F9D6B",
          soft: "#D9F0E2",
        },
        chalk: {
          DEFAULT: "#FBFAF5",
          warm: "#F4EEDD",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(37,99,235,0.18), 0 20px 60px -20px rgba(37,99,235,0.35)",
        warm: "0 20px 50px -20px rgba(255,138,61,0.55)",
      },
      backgroundImage: {
        "dawn-radial":
          "radial-gradient(1200px 600px at 10% -10%, rgba(255,181,71,0.25), transparent 60%), radial-gradient(900px 500px at 100% 0%, rgba(37,99,235,0.20), transparent 55%)",
        "chalk-grid":
          "linear-gradient(to right, rgba(11,18,32,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,18,32,0.06) 1px, transparent 1px)",
        "sherpas-gradient":
          "linear-gradient(90deg, #29ABE2 0%, #5B6BF5 35%, #8B2FC9 70%, #E91E8C 100%)",
        "lavender-glow":
          "radial-gradient(900px 500px at 80% -10%, rgba(220,184,254,0.55), transparent 60%), radial-gradient(700px 400px at 0% 100%, rgba(180,248,99,0.25), transparent 55%)",
        "midnight-glow":
          "radial-gradient(1000px 500px at 100% 0%, rgba(180,248,99,0.18), transparent 60%), radial-gradient(900px 600px at 0% 100%, rgba(220,184,254,0.18), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
