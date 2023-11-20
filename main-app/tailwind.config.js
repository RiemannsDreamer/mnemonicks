/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      lightMode: {
        backgroundColor: 'bg-white',
        textColor: 'text-black',
        primaryColor: 'bg-blue-500',
      },
      darkMode: {
        backgroundColor: 'bg-gray-800',
        textColor: 'text-white',
        primaryColor: 'bg-gray-700',
      },
      redMode: {
        backgroundColor: 'bg-red-500',
        textColor: 'text-white',
        primaryColor: 'bg-red-600',
      },
      emeraldMode: {
        backgroundColor: 'bg-emerald-500',
        textColor: 'text-white',
        primaryColor: 'bg-emerald-600',
      },
      cyanMode: {
        backgroundColor: 'bg-cyan-500',
        textColor: 'text-white',
        primaryColor: 'bg-cyan-600',
      },
    },
  },
  plugins: [],
};
