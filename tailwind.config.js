/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        cursive: ["Roboto", "sans-serif"],  // Update any other font families to Roboto
        cursive2: ["Roboto", "sans-serif"],
      },
      colors: {
        // primary: "#854d3d",
        // secondary: "#4a1e1b",
        // brandDark: "#270c03",
        // dark: "#1e1e1e",
        // light: "#f5f5f5",
        primary: "#ffffff",  // White
        secondary: "#ffffff",  // Blue
        brandDark: "black",  // Darker Blue
        dark: "#000099",  // Even Darker Blue
        light: "#f5f5f5"  // Light color, keeping the same if needed
        
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
  
};
