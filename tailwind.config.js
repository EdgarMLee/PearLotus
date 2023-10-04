/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      maxHeight: {
        0: "0px",
      },
      backgroundOpacity: {
        10: "0.1",
        20: "0.2",
        92: "0.92",
        95: "0.95",
      },
      colors: {
        white: {
          100: "#FAFAFC",
        },
        black: {
          100: "#6E696E",
          300: "#3B363B",
          500: "#080708",
        },
        gray: {
          100: "#f5f5f5",
          200: "#ededed",
          300: "#dfdfdf",
          400: "#bcbcbc",
          500: "#9d9d9d",
          600: "#747474",
          700: "#606060",
          800: "#414141",
          900: "#202020",
        },
        blue: {
          100: "#D9E7FF",
          200: "#BCD5FF",
          300: "#8EBBFF",
          400: "#5996FF",
          500: "#3772FF",
          600: "#1B4DF5",
          700: "#1439E1",
          800: "#172FB6",
          900: "#192D8F",
        },
        dblue: {
          50: "#e5ecef",
          100: "#bfcfd8",
          200: "#95b0be",
          300: "#6a90a4",
          400: "#4a7891",
          500: "#2a607d",
          600: "#255875",
          700: "#1f4e6a",
          800: "#194460",
          900: "#0f334d",
        },
      },
      spacing: {
        28: "7rem",
        68: "17rem",
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
      },
      animation: {
        "bounce-left-right": "bounce-left-right 1s ease-in-out infinite",
      },
      keyframes: {
        "bounce-left-right": {
          "0%, 100%": {
            transform: "translateX(-10%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};

