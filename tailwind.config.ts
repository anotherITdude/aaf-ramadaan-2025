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
			
  		colors: {
  			primary: "#09A652",
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
  			
  		},
  	}
  },
  //plugins: [require("tailwindcss-animate")],
} satisfies Config;
