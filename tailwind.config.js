/** @type {import('tailwindcss').Config} */

const textColor = {
  // black: "var(--text-black)",
  // label: "var(--label-color)",
  // placeholder: "var(--placeholder-color)",
};

const backgroundColor = {
  // white: "var(--white)",
  // gray: "var(--bg-gray)",
};
const borderColor = {
  gray: "var(--border-color)",
};

const color = {
  primary: "var(--primary)",
};

const fontSize = {
  base: "1rem",
  18: ["var(--text-18)"],
  20: ["var(--text-20)"],
  23: ["var(--text-23)"],
  25: ["var(--text-25)"],
  26: ["var(--text-26)"],
  28: ["var(--text-28)"],
  33: ["var(--text-33)"],
  40: ["var(--text-40)"],
  60: ["var(--text-60)"],
  80: ["var(--text-80)"],
  h1: ["var(--text-h1)"],
  h2: ["var(--text-h2)"],
  h3: ["var(--text-h3)"],
  h4: ["var(--text-h4)"],
  h5: ["var(--text-h5)"],
  h6: ["var(--text-h6)"],
  // md: [
  //   "var(--text-22)",
  //   {
  //     lineHeight: "1.36",
  //   },
  // ],
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      forum: ["Forum", "serif"],
      Cormorant: ["Cormorant Garamond", "serif"],
    },
    screens: {
      sm: "575px",
      md: "768px",
      lg: "991px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1366px"
    },
    container: {
      center: true,
      padding: {
        default: "24px",
        sm: "20px",
        "2xl": "24px",
      },
    },
    fontSize,

    extend: {
      height: {
        "banner-height": "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
