/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', "./src/**/*.{html,js,jsx}",],
  theme: {
    extend: {
      colors: {
        skyBlue: "#87CEEB",
        lightBlue: "#A8D3F3",
        roseTaupe: "#A68776",
        midnightBlue: "#1A084E",
        lavenderMist: "#E9D3FF",
        lightSteelBlue: "#B5C7ED",
        languidLavender: "#D5D3E6",
        lavender: "#E6E6FA",
      },
      fontFamily: {
        Sarabun: ['Sarabun', 'sans-serif'],
        IBMPSans: ['IBM Plex Sans', 'sans-serif'],
        Rowdies: ['Rowdies', 'cursive'],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        semibold: 600,
        bold: 700,
      }
    },
  },
  plugins: [],
}
