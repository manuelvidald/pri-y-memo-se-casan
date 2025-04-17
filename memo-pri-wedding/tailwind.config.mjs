/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontSize: {
          '4.5xl': ['2.5875rem', { lineHeight: '2.75rem' }], // Approx 41.4px
          '5.5xl': ['3.45rem', { lineHeight: '1' }],     // Approx 55.2px
        },
        colors: {
          'blue-dark': '#004AAD',
          'blue-medium': '#4F84B4',
          'blue-light': '#B3D9E0',
          'yellow-medium': '#E9B753',
          'yellow-dark': '#F1A805',
          'brown-medium': '#A3876F',
          'gold-light': '#F2D6A1',
          'gold-medium': '#D2AF7D',
          'beige': '#EDD5C0',
          'invitation-blue': '#0540a0',
          'paper-beige': '#ffffff',
          'text-main': '#8D6F40',
        },
        fontFamily: {
          'ibm-plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
          'script': ['"Dancing Script"', 'cursive'],
          'playfair': ['"Playfair Display"', 'serif'],
          'montserrat': ['Montserrat', 'sans-serif'],
          'malone-clemettine': ['Malone Clemettine Serif', 'serif'],
          'serendipity-script': ['Serendipity Boutique Script', 'cursive'],
          'raleway': ['Raleway', 'sans-serif'],
          'antic-didone': ['"Antic Didone"', 'serif'],
          'miltonian': ['"Miltonian One"', 'cursive'],
          'milton-normal': ['Milton One Normal', 'cursive'],
          'lichtner': ['Lichtner', 'sans-serif'],
        },
        backgroundImage: {
          'paper-texture': "url('/images/paper-texture.jpg')",
        }
      },
    },
    plugins: [],
  }