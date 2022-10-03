module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
            center: true,
        },
        fontFamily: {
            sans: ['Lato', 'sans-serif'],
            serif: ['Cambria', 'serif'],
        },
        fontSize: {
            xs: '.75rem',
            sm: '.875rem',
            tiny: '.875rem',
             base: '1rem',
             lg: '1.125rem',
             xl: '1.25rem',
             '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
             '5xl': '3rem',
             '6xl': '4rem',
            '7xl': '5rem',
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            color1: '#6348B3',
            color2: '#DA37A7',
            color3: '#EF5F87',
            color4: '#7380F3',
            color5: '#F35810',
            color6: '#00AB5F',
            color7: '#FDD039',

            gradient1rgb: 'rgb(115,128,243)',
            gradient1: 'linear-gradient(90deg, rgba(115,128,243,1) 0%, rgba(240,95,135,1) 100%)',

            neutral1: '#0C0F14',
            neutral2: '#fff',
            neutral3: '#666666'
        }),
        extend: {
            colors: {
                color1: '#6348B3',
                color2: '#DA37A7',
                color3: '#EF5F87',
                color4: '#7380F3',
                color5: '#F35810',
                color6: '#00AB5F',
                color7: '#FDD039',

                gradient1rgb: 'rgb(115,128,243)',
                gradient1: 'linear-gradient(90deg, rgba(115,128,243,1) 0%, rgba(240,95,135,1) 100%)',

                neutral1: '#0C0F14',
                neutral2: '#fff',
                neutral3: '#666666'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
