/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Index-Datei im Hauptverzeichnis
    './src/**/*.{html,js,jsx,ts,tsx}', // Alle Dateien in Unterordnern von src
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background": "linear-gradient(90deg, rgba(12,40,30,1) 0%, rgba(18,24,60,1) 50%, rgba(30,50,90,1) 100%)"
      }
    }
  },
  plugins: [],
}
