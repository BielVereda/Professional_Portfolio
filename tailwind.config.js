/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                darkBg: "#070b14",
                cardBg: "#0f172a",
                accentCyan: "#22d3ee",
            }
        },
    },
    plugins: [],
}