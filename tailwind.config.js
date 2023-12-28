/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f9f9fb",
          "200": "#f5f6f7",
          "300": "#f0f1f5",
        },
        white: "#fff",
        gainsboro: "#d9dde8",
        lightslategray: "#878da1",
        gold: "#ffd600",
        gray: {
          "100": "#191c24",
          "200": "#191b24",
          "300": "#101217",
        },
        darkgray: "#9ba0b0",
        dodgerblue: "#066dc7",
        dimgray: "#5a6072",
        honeydew: "#d3fddc",
        darkgreen: "#054d14",
        aliceblue: "#ebf6ff",
        darkslateblue: "#00417a",
      },
      spacing: {},
      fontFamily: {
        "segoe-ui": "'Segoe UI'",
        tahoma: "Tahoma",
      },
    },
    fontSize: {
      sm: "14px",
      "sm-3": "13.3px",
      "sm-7": "13.7px",
      "xs-3": "11.3px",
      "xs-6": "11.6px",
      "sm-6": "13.6px",
      "xs-7": "11.7px",
      "sm-9": "13.9px",
      "2xs-9": "10.9px",
      "sm-5": "13.5px",
      "xs-2": "11.2px",
      base: "16px",
      xs: "12px",
      "sm-1": "13.1px",
      "smi-8": "12.8px",
      "xs-8": "11.8px",
      "5xl": "24px",
      "xs-4": "11.4px",
      "xs-1": "11.1px",
      "3xs": "10px",
      "3xs-1": "9.1px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
  options: {
    safelist: ['border', 'border-b'],
  },
};
