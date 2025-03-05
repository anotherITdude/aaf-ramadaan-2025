import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		extend: {
			screens: {
				xs: '300px',
				sm: '400px',
      },
  		colors: {
  			primary: "#00144d",
        primaryDark: "#256948",
        secondary: "#eecd7b",
        heading: "#256948",
        white: "#FFFFFF",
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'Albus': ["Albus"],
				'Gotham-Book': ["Gotham-Book"],
				'Gotham-Bold': ["Gotham-Bold"],
				'GE-SS-Text-Bold': ["GE-SS-Text-Bold"],
				'GE-SS-Text-Light': ["GE-SS-Text-Light"],
				'GE-SS-Text-Medium': ["GE-SS-Text-Medium"],
				'Zain-Black': ["Zain-Black"],
				'Helvetica-Bold': ["Helvetica-Bold"],
				'Helvetica-Regular': ["Helvetica-Regular"],
  			
  		},
  	}
  },
  //plugins: [require("tailwindcss-animate")],
} satisfies Config;
