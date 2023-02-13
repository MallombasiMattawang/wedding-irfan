/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        main: "url('https://img.freepik.com/free-photo/background-with-big-leaves-top_23-2147721636.jpg?w=1060&t=st=1676289051~exp=1676289651~hmac=c10a5fc1ad148f1142746b1c13017b9f963669f2b3683f244754599abe59d01a')",
      }),
      fontFamily: {
        shalimar: ["Shalimar", "handwriting"],
        Poppins: ["Poppins", "san-serif"],
        Poppins2: ["Poppins", "san-serif"],
        Open: ["Open Sans", "san-serif"],
        Bree: ["Bree Serif", "serif"],
      },
      colors: {
        primary: "#6A9483",
        secondary: "#A2BFAD",
        third: "#223C31",
      },
    },
  },
  plugins: [],
};
