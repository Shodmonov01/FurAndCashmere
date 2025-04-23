/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main_bgcolor': '#f7f5f1',
        // 'dark-red': '#5C1F17',
        'dark-red': '#7C513E',
        'bold_text': '#2B2B2A',
        'normal_text': '#5B5A57'
      },
      fontFamily: {
        constantine: ["Constantine"],
        goodvibespro: ["GoodVibesPro"],
        inter: ["Inter"],
        inter_medium: ["Inter_Medium"],
        inter_semibold: ["Inter_Semibold"],
        inter_bold: ["Inter_Bold"],
        // gunterz: ["Gunterz"],
        // montserrat: ["Montserrat"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xxl: "1300px",
      xxxl: "1500px",
    },
  },
  plugins: [],
}

