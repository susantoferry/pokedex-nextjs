import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      gridTemplateColumns: {
        "auto-fit-minmax": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "pokemon-frame": "url('/images/file.png')",
        "custom-gradient": "inear-gradient(90deg, #02b7ff, #fcfff3, #0281ff)",
      },
      boxShadow: {
        "gradient-search-box": `0 0 5px 1px rgba(2, 183, 255, 0.6), 
                                0 0 30px 0px rgba(2, 183, 255, 0.4), 
                                0 0 45px 1px rgba(2, 183, 255, 0.2)`,
        "box-detail": `0 0 5px 3px rgba(109, 255, 255, 0.2), 
                          0 0 10px 3px rgba(109, 255, 255, 0.2), 
                          0 0 5px 3px rgba(109, 255, 255, 0.1)`,
      },
      colors: {
        sky: "#C3EBFA",
        skyLight: "#EDF9FD",
        purple: "#CFCEFF",
        purpleLight: "#F1F0FF",
        yellow: "#FAE27C",
        yellowLight: "#FEFCE8",
      },

      keyframes: {
        shine: {
          "0%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "100% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "75%": { backgroundPosition: "0% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        display: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          "0%": { right: "-400px" },
          "100%": { right: "calc(10vw + 15px)" }
        },
        skeleton: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shine: "shine 3s linear infinite",
        skeleton: "skeleton 1.2s infinite",
        slideIn: 'display 0.65s ease-in-out, slideIn 0.65s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
