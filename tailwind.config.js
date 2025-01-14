/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Включення шляхів до всіх можливих файлів, які містять JSX/TSX/MDX та інші компоненти:
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Якщо використовуєш src директорію
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        md:"32px"
      },
    },
    screens:{
      sm:"340px",
      md:"540px",
      lg:"768px",
      xl:"1180px"
    },
    extend: {
      // Кастомні кольори
      colors: {
        primary: '#3490dc', // Блакитний
        secondary: '#ffed4a', // Жовтий
        accent: '#f7b731', // Акцентний колір
        dark: '#1a1a1a', // Темний фон
        light: '#f7fafc', // Світлий фон
        background: '#F3F4F6', // Світлий фон
        text: '#111827', // Темний текст
      },
      // Кастомні шрифти
      fontFamily: {
        Jost: ["Jost","sans-rerif"],
        Lobster:["Lobster","sans-rerif"]
      },
      // Кастомні відступи
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      // Розширення брейкпоінтів
      // Анімації
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  darkMode: 'class', // Або 'media' для автоматичного визначення темної теми
  purge: {
    enabled: process.env.NODE_ENV === 'production', // Включає purge в продакшн-режимі
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
  },
}
