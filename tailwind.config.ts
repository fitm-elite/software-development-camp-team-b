import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.btn-number': {
          backgroundColor: '#697565',
          color: 'white',
          textAlign: 'center',
          fontSize: '3rem',
          fontWeight: 'bold',
          width: '80%',
          height: '8vh',
          borderRadius: '0.5rem',
          marginTop: '1rem',
          marginBottom: '1rem',
        },
        '.btn-operator': {
          backgroundColor: '#ECDFCC',
          color: 'black',
          textAlign: 'center',
          fontSize: '3rem',
          width: '80%',
          height: '8vh',
          borderRadius: '0.5rem',
          marginTop: '1rem',
          marginBottom: '1rem',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};

export default config;