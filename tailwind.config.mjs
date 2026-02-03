/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#2E86AB',    // 主色：專業藍
				'primary-dark': '#1b4f6b', // 深藍 Hover 用
				'bg-light': '#E3F2FD', // 背景色：淡藍
				accent: '#F2994A',     // 點綴色 (橘)
			},
			animation: {
				'float': 'float 8s ease-in-out infinite',
				'spin-slow': 'spin 22s linear infinite',
				'fade-up': 'fadeUp 0.8s ease-out forwards',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				}
			}
		},
	},
	plugins: [],
}