const {fontFamily} = require("tailwindcss/defaultTheme")
const {colors} = require("tailwindcss/defaultTheme")
const {extend} = require("tailwindcss/defaultTheme")
const {forms} = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./index.html"
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },

        extend: {},
    },
    plugins: [
        "@tailwindcss/forms",
        "tailwindcss-animate"
    ],
}

