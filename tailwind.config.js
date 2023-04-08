/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['Impact','ui-monospace', 'SFMono-Regular'], 
      'display': ['Oswald', ],
      'body': ['"Open Sans"'], 
    }
    // extend: {},
  },
  plugins: [],
}

