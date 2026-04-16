import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: '#0b1020',
        panel: '#11182d',
        ink: '#e5edf8',
        muted: '#94a3b8',
        line: 'rgba(255,255,255,0.08)',
        accent: '#7c3aed',
        accent2: '#06b6d4',
        accent3: '#f59e0b',
      },
      boxShadow: {
        soft: '0 20px 80px rgba(0,0,0,0.28)',
        card: '0 12px 40px rgba(2,6,23,0.22)',
      },
      backgroundImage: {
        aurora:
          'radial-gradient(circle at 20% 20%, rgba(124,58,237,0.28), transparent 30%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.22), transparent 28%), radial-gradient(circle at 70% 70%, rgba(245,158,11,0.12), transparent 25%)',
      },
    },
  },
  plugins: [],
};

export default config;
