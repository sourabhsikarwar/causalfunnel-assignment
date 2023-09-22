/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#32C5FF",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(-5%)" },
        },
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      }
    },
  },
  plugins: ["flowbite/plugin"],
};
