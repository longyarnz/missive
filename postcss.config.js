module.exports = () => ({
    plugins: [
        require('postcss-import'),
        require('precss'),
        require('tailwindcss')('tailwind.config.js'),
        process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    ],
})