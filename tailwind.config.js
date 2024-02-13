/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],
    theme: {
        fontFamily: {
            'body': ["Poppins", 'sans-serif'],
            'heading': ["Montserrat", 'sans-serif'],
        },
        extend: {
            'hero-pattern': "url('/Image/Hero.jpg')",
            gridAutoRows: {
                'gridBox': 'minmax(160px, auto)',
            }
        },
        boxShadow: {
            'cstm': '0px 3px 8px rgba(0,0,0,0.24)',
            'cstm2': '0px 3px 8px rgba(0,0,0,0.15)'
        }
    },
    daisyui: {
        themes: ["dark"],
      },
    // eslint-disable-next-line no-undef
    plugins: [require('daisyui')],

}