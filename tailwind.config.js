/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        main: "#68A4F4",
        'chat': '#5399F6',
        accent: "#FF9F43",
        "primary-text": "#565656",
        "secondary-text": "#0000006B",
        "card-bg" : "#FDFDFD",
        "primary-bg": "#FAFAFA",
        "secondary-bg":'#F2F1F1'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'chat-service': '-3px 3px 39px 0px #0000001C',
        'chat-button': '0px 4px 4px 0px #00000040'
      },
    },
  },
  plugins: [],
};
