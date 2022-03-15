module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
  mode: "jit",
};
