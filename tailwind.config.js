// import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

module.exports = {
  // mode: "jit",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.{js,vue,ts}",
    "./pages/**/*.{js,vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  plugins: [],

  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px"
      },
      container: {
        fluid: {
          maxWidth: "100%"
        }
      },
      fontFamily: {
        sans: [
          "Wanted Sans Variable",
          "Wanted Sans",
          "Montserrat",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "sans-serif"
        ],
        serif: ["Lora", "serif"]
      },
      colors: {
        primary: {
          50: "#eefff2",
          100: "#d7ffe3",
          200: "#b2ffc8",
          300: "#64ff93", // default
          400: "#33f56f",
          500: "#09de4b",
          600: "#01b839",
          700: "#059031",
          800: "#0a712b",
          900: "#0a5d26",
          950: "#003412"
        },
        gray: {
          DEFAULT: "#EDEDED",
          50: "#FFFFFF",
          100: "#FEFEFE",
          200: "#EDEDED",
          300: "#d9d9d9",
          400: "#B5B5B5",
          500: "#999999",
          600: "#7D7D7D",
          700: "#616161",
          800: "#454545",
          900: "#292929",
          950: "#1B1B1B"
        },
        transparent: "transparent",
        red: colors.red,
        white: colors.white,
        black: colors.black,
        "purple-heart": {
          DEFAULT: "#4f42e9",
          50: "#eef2ff",
          100: "#dfe6ff",
          200: "#c6d0ff",
          300: "#a3b1fe",
          400: "#7e87fb",
          500: "#5f60f5",
          600: "#4f42e9", // default
          700: "#4334ce",
          800: "#372da6",
          900: "#312c83",
          950: "#1e1a4c"
        },
        crusoe: {
          DEFAULT: "#003a08",
          50: "#e6ffe4",
          100: "#c8ffc5",
          200: "#95ff92",
          300: "#53ff53",
          400: "#1ffc26",
          500: "#00e20a",
          600: "#00b50e",
          700: "#02890d",
          800: "#086c11",
          900: "#0c5b14",
          950: "#003a08" // default
        },
        "spring-green": {
          DEFAULT: "#64ff93",
          50: "#eefff2",
          100: "#d7ffe3",
          200: "#b2ffc8",
          300: "#64ff93", // default
          400: "#33f56f",
          500: "#09de4b",
          600: "#01b839",
          700: "#059031",
          800: "#0a712b",
          900: "#0a5d26",
          950: "#003412"
        },
        "baja-white": {
          DEFAULT: "#fff7cf",
          50: "#fffceb",
          100: "#fff7cf", // Default
          200: "#ffeb88",
          300: "#ffdb4a",
          400: "#ffc820",
          500: "#f9a707",
          600: "#dd7e02",
          700: "#b75906",
          800: "#94440c",
          900: "#7a380d",
          950: "#461c02"
        },
        "classic-rose": {
          DEFAULT: "#ffcce4",
          50: "#fef1f7",
          100: "#fee5f1",
          200: "#ffcce4", // default
          300: "#ffa1cc",
          400: "#ff66a8",
          500: "#fb3986",
          600: "#eb1760",
          700: "#cd0947",
          800: "#a90b3c",
          900: "#8d0e35",
          950: "#57001b"
        },
        "hawkes-blue": {
          DEFAULT: "#cfdcfc",
          50: "#eff3fe",
          100: "#e1ebfe",
          200: "#cfdcfc", // default
          300: "#a9bdf8",
          400: "#869af3",
          500: "#6978eb",
          600: "#4d52de",
          700: "#3e40c4",
          800: "#35389e",
          900: "#32377d",
          950: "#1d1e49"
        }
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        "4/3": "4 / 3",
        video: "16 / 9"
      },
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem"
      },
      borderRadius: {
        none: "0",
        sm: ".125rem",
        DEFAULT: ".25rem",
        lg: ".5rem",
        xl: "1rem",
        full: "9999px"
      },
      opacity: {
        0: "0",
        20: "0.2",
        40: "0.4",
        60: "0.6",
        80: "0.8",
        100: "1"
      }
      // },
    }
  }
};
