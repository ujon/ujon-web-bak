import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "hsla(48, 92%, 55%, 1)", // --palette-yellow
                    secondary: "hsla(0, 0%, 100%, 1)", // --palette-white
                    background: "hsla(0, 0%, 100%, 1)", // --palette-white
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    primary: "hsla(48, 92%, 55%, 1)", // --palette-yellow
                    secondary: "hsla(0, 0%, 100%, 1)", // --palette-white
                    background: "hsla(0, 0%, 0%, 1)", // --palette-black
                },
            },
        ],
    },
};
export default config;
