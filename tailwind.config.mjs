/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      zIndex: {
        10: 10,
        "-10": -10,
      },
      boxShadow: {
        custom: "0px 23px 30px 0px #16437763",
        "heavy-blue": "0px 23px 30px 0px #16437763",
      },
      skew: {
        45: "45deg",
        12: "12deg",
      },
      aspectRatio: {
        "5/6": "5 / 6",
      },
      colors: {
        blue: {
          50: "#F8FCFF",
          600: "#2563eb",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-blue": "#F8FCFF",
      },
    },
  },
  plugins: [],
};
