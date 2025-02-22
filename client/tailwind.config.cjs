module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        floatSlow: "float 6s ease-in-out infinite",
        floatFast: "float 3s ease-in-out infinite",
        floatMid: "float 4.5s ease-in-out infinite",
        bounceSlow: "bounce 3s infinite",
        pulseFast: "pulse 1.5s infinite",
        spinSlow: "spin 6s linear infinite",
        rotateFast: "rotate 5s linear infinite",
        wiggle: "wiggle 2s ease-in-out infinite",
        shake: "shake 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0px)" },
          "25%": { transform: "translateX(-3px)" },
          "50%": { transform: "translateX(3px)" },
          "75%": { transform: "translateX(-3px)" },
        },
      },
    },
  },
  plugins: [],
};
