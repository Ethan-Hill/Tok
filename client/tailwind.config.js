module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        DarkNavy: '#151923',
        Navy: '#1A202C',
        LightNavy: '#2D3748',
        RoyalBlue: '#4542E1',
        Abbey: '#E14C42',
        BorderBlue: '#3A4061',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
