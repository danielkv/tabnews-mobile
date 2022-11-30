/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            white: '#ffffff',
            black: '#000000',
            gray: {
                100: '#929497',
                300: '#5B5F63',
                500: '#24292F',
                700: '#1B1F23',
                900: '#121518',
            },
        },
    },
    plugins: [],
}
