/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@catppuccin/tailwindcss")({
            // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
            // default is `false`, which means no prefix
            prefix: "ctp",
            // which flavour of colours to use by default, in the `:root`
            defaultFlavour: "mocha"
        }),
    ],
};

