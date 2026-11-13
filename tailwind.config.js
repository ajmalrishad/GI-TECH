/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Roboto", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#e0effe",
          200: "#bae0fd",
          300: "#7cc4fb",
          400: "#36a5f7",
          500: "#0b88e8",
          600: "#0066cc",
          700: "#0052a8",
          800: "#044588",
          900: "#093b70",
          950: "#06254a",
        },
        primary: "#0066cc",
        primaryHover: "#0052a8",
        secondary: "#0f172a",
        brandDark: "#0b1120",
        dark: "#0f172a",
        light: "#f8fafc",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};
