/** @type {import('tailwindcss').Config} */

const textColor = {
 ourSection: "var(--ourSection-color)"
};

const backgroundColor = {
  // white: "var(--white)",
  // gray: "var(--bg-gray)",
  enquiryForm: "var(--bg-enquiry-form)",
  grey: "var(--bg-grey)",
  ourServices: "var(--ourServices-bg)",
  primary: "var(--primary)",
  primaryHover: "var(--primary-hover)",
  secondaryHover: "var(--secondary-hover)",
  highlightsHover: "var(--highlights-hover)",

};
const borderColor = {
  gray: "var(--border-color)",
  formBorder: "var(--form-border)",
};

const colors = {
  primary: "var(--primary)",
  primaryHover: "var(--primary-hover)",

};

const fontSize = {
  base: "1rem",
  16: ["var(--text-16)"],
  18: ["var(--text-18)"],
  19: ["var(--text-19)"],
  20: ["var(--text-20)"],
  22: ["var(--text-22)"],
  23: ["var(--text-23)"],
  25: ["var(--text-25)"],
  26: ["var(--text-26)"],
  28: ["var(--text-28)"],
  30: ["var(--text-30)"],
  33: ["var(--text-33)"],
  35: ["var(--text-35)"],
  40: ["var(--text-40)"],
  45: ["var(--text-45)"],
  50: ["var(--text-50)"],
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
      Silk : ["Silk","Serif"],
      worksans: ["Worksans", "serif"],      
    },
    screens: {
      sm: "575px",
      md: "768px",
      lg: "991px",
      xl: "1024px",
      "2xl": "1440px",
      "3xl": "1920px"
    },
    container: {
      center: true,
      padding: '20px',
      margin: '0',
    },
    fontSize,

    extend: {
      backgroundColor,
      borderColor,
      textColor,
      colors,
      height: {
        "banner-height": "calc(100vh - 80px)",
        "banner-height-responsive": "calc(100vh - 66px)",
      },
    },
  },
  plugins: [],
};
