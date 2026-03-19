/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cal Sans"', '"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Inter var"', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        bg:      { DEFAULT: '#000f1a', 2: '#001524', 3: '#001d30' },
        surface: { DEFAULT: '#002540', 2: '#003255' },
        accent:  { DEFAULT: '#2fb5e8', 2: '#65ccf0' },
        teal:    '#2dd4bf',
        coral:   '#f87171',
        amber:   '#fbbf24',
        sage:    '#dceac6',
      },
      animation: {
        'pulse-dot':  'pulse-dot 2.5s ease-in-out infinite',
        'ticker':     'ticker 30s linear infinite',
        'fade-up':    'fadeUp 0.7s ease both',
        'slide-left': 'slideLeft 0.4s cubic-bezier(0.4,0,0.2,1) both',
        'slide-right':'slideRight 0.4s cubic-bezier(0.4,0,0.2,1) both',
      },
      keyframes: {
        'pulse-dot':   { '0%,100%':{opacity:'1',transform:'scale(1)'},'50%':{opacity:'0.5',transform:'scale(0.8)'} },
        'ticker':      { from:{transform:'translateX(0)'},to:{transform:'translateX(-50%)'} },
        'fadeUp':      { from:{opacity:'0',transform:'translateY(18px)'},to:{opacity:'1',transform:'translateY(0)'} },
        'slideLeft':   { from:{opacity:'0',transform:'translateX(40px)'},to:{opacity:'1',transform:'translateX(0)'} },
        'slideRight':  { from:{opacity:'0',transform:'translateX(-40px)'},to:{opacity:'1',transform:'translateX(0)'} },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(47,181,232,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(47,181,232,0.04) 1px,transparent 1px)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
