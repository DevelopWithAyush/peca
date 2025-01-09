import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "jolly-lodger_400": ["JollyLodger-Regular", "sans-serif"],
        "space-comics_400": ["Space-Comics", "sans-serif"],
        "modern-antiqua_400": ["MordernAntiqua-Regular", "sans-serif"],
        "comic-neue-light_300": ["ComicNeue-Light", "sans-serif"],
        "comic-neue-light-italic_300": ["ComicNeue-LightItalic", "sans-serif"],
        "comic-neue-regular_400": ["ComicNeue-Regular", "sans-serif"],
        "comic-neue-regular-italic_400": [
          "ComicNeue-RegularItalic",
          "sans-serif",
        ],
        "comic-neue-bold_700": ["ComicNeue-Bold", "sans-serif"],
        "comic-neue-bold-italic_700": ["ComicNeue-BoldItalic", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
