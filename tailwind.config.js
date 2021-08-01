module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    colors: {
      grey: {
        light: '#8AB5D4',
        DEFAULT: '#7194AD',
        dark: '#2E3D47',
      }
    },
    extend: {
      animation: {
        'header-background': 'header-background 5s cubic-bezier(.8, 0, .2, 1) 5s infinite alternate both',
      },
      keyframes: {
        'header-background': {
          '0%': {
            backgroundColor: "theme('colors.grey.dark')",
            color: "theme('colors.grey.light')",
          },
          '100%': {
            backgroundColor: "theme('colors.grey.light')",
            color: "theme('colors.grey.dark')",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
