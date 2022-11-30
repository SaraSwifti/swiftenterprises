// Not sure why they include ts and tsx in the tailwind react instructions. added here for good measure
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx, ts, tsx}", 
    "./public/index.html"
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xlg: '1440px',
    },
    
    
  },

  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
