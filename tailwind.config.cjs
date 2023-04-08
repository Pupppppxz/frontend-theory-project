/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Sans Thai", "sans-serif"],
      },
      colors: {
        "custom-white": "#F5F5F5",
        "custom-red": "#F05454",
        "custom-navy": "#30475E",
        "custom-light-navy": "#476b90",
        "custom-super-light-navy": "#88DBC2",
        "custom-green": "#009688",
        "custom-black": "#24252B",
        "custom-darker-black": "#1B1B1B",
      },
      animation: {
        fade: "fadeOut 1s ease-in-out",
        "member-fade-1": "fadeOut 1s ease-in-out",
        "member-fade-2": "fadeOut 1.25s ease-in-out",
        "member-fade-3": "fadeOut 1.5s ease-in-out",
        "member-fade-4": "fadeOut 1.75s ease-in-out",
        "member-fade-5": "fadeOut 2.s ease-in-out",
        "member-fade-6": "fadeOut 2.25s ease-in-out",
        "member-fade-7": "fadeOut 2.5s ease-in-out",
        "member-fade-8": "fadeOut 2.75s ease-in-out",
        "member-fade-9": "fadeOut 3s ease-in-out",
        "member-fade-10": "fadeOut 3.25s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 0, marginTop: "4rem" },
          "100%": { opacity: 1, marginTop: "0.75rem" },
        },
      }),
    },
  },
  plugins: [],
};
