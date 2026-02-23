/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#8B5CF6',
                    50: '#F5F3FF',
                    100: '#EDE9FE',
                    200: '#DDD6FE',
                    300: '#C4B5FD',
                    400: '#A78BFA',
                    500: '#8B5CF6',
                    600: '#7C3AED',
                    700: '#6D28D9',
                    800: '#5B21B6',
                    900: '#4C1D95',
                },
                secondary: {
                    DEFAULT: '#06B6D4',
                    400: '#22D3EE',
                    500: '#06B6D4',
                    600: '#0891B2',
                },
                accent: {
                    pink: '#EC4899',
                    orange: '#F97316',
                    green: '#10B981',
                    yellow: '#FBBF24',
                },
                surface: {
                    DEFAULT: '#1E1B2E',
                    50: '#F8F7FF',
                    card: '#252338',
                    border: '#312E4A',
                },
                dark: '#0F0D1A',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                'card-gradient': 'linear-gradient(145deg, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.05) 100%)',
                'sidebar-gradient': 'linear-gradient(180deg, #1a1730 0%, #0f0d1a 100%)',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(139,92,246,0.3)',
                'glow-sm': '0 0 10px rgba(139,92,246,0.2)',
                'glow-cyan': '0 0 20px rgba(6,182,212,0.3)',
                'card': '0 4px 24px rgba(0,0,0,0.12)',
                'card-hover': '0 8px 40px rgba(139,92,246,0.2)',
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.4s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
