module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        textColor: (theme) => theme("colors"),
        textColor: {
            primary: "#3490dc",
            secondary: "#757575",
        },
        borderColor: (theme) => theme("colors"),
        borderColor: {
            d4: "#d4d4d4",
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
