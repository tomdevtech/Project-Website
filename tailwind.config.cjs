/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Index-Datei im Hauptverzeichnis
    './src/**/*.{html,js,jsx,ts,tsx}', // Alle Dateien in Unterordnern von src
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "linear-gradient(90deg, rgba(6,27,14,1) 0%, rgba(6,4,32,1) 100%)"
      }
    }
  },
  plugins: [],
}
