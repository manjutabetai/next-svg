  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}", // Next.js の app ディレクトリを追加
      "./components/**/*.{js,ts,jsx,tsx,mdx}", // components ディレクトリを追加
      "./pages/**/*.{js,ts,jsx,tsx,mdx}", // pages ディレクトリを追加（存在する場合）
    ],    theme: {
      extend: {
        fontFamily: {
          alpino: ["var(--font-alpino)", "sans-serif"], // カスタムフォントを追加
        },
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 3s linear infinite",
        "spin-slow": "spin 6s linear infinite",
      },
    },
    plugins: [],
  };