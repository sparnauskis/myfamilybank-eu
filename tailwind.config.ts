import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fff8ec",
        linen: "#f6ead8",
        sage: "#7f9c7a",
        moss: "#31533f",
        coral: "#e87961",
        ink: "#25312b"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(62, 73, 59, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
