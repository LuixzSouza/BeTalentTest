/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue_primary: '#0500FF',
      blue_10: '#EDEFFB',
      black_neutral: '#1C1C1C',
      white: '#FFF',
      gray_20: '#9E9E9E',
      gray_10: '#DFDFDF',
      gray_05: '#F5F5F5',
      gray_00: '#F0F0F0',
    },
    boxShadow: {
      shadow_1: "0px 1px 4px 0px rgba(0, 0, 0, 0.2)",
      shadow_2: "0px 2px 4px 0px rgba(0, 0, 0, 0.2)",
    },
  },
  plugins: [],
}
