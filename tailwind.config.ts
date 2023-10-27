import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/lib/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            h1: ["3rem", { letterSpacing: "-0.015em", fontWeight: 600 }],
            h2: ["2.25rem", { letterSpacing: "-0.015em", fontWeight: 600 }],
            h3: ["1.75rem", { letterSpacing: "-0.015em", fontWeight: 500 }],
            headline: [
                "1.25rem",
                { letterSpacing: "-0.015em", fontWeight: 400 },
            ],
            /* V default to body text */
            base: ["1rem", { letterSpacing: "-0.015em", fontWeight: 400 }],
            subheadline: [
                "0.875rem",
                { letterSpacing: "-0.015em", fontWeight: 400 },
            ],
            small: ["0.75rem", { letterSpacing: "-0.015em", fontWeight: 400 }],
        },
        colors: {
            white: "#fff",
            black: "#000",
            primary: "#ffa724",
            secondary: "#222222",
            gray: "#6d6d6d",
            /**
             * gradient top (usage: `bg-gradient from-yellow to-orange`)
             */
            yellow: "#ffa724",
            /**
             * gradient bottom (usage: `bg-gradient from-yellow to-orange`)
             */
            orange: "#ff6928",
            "high-emphasis": "#ffffffeb",
            "medium-emphasis": "#ffffff99",
            disabled: "#ffffff61",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                sans: ["'Avenir Next'", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
export default config;
