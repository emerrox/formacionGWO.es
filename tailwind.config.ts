import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
        'cta-attention': {
          '0%':    { transform: 'scale(1) rotate(0deg)' },
          '10%':   { transform: 'scale(1.03) rotate(0deg)' }, // Scale up complete

          // Shake 1 (+/-4deg)
          '17%':   { transform: 'scale(1.03) rotate(-4deg)' },
          '23%':   { transform: 'scale(1.03) rotate(4deg)' },
          '30%':   { transform: 'scale(1.03) rotate(0deg)' }, // End Shake 1

          // Shake 2 (+/-4deg) - starts after a brief pause
          '35%':   { transform: 'scale(1.03) rotate(0deg)' }, // Start of shake 2 (ensures rotation is reset)
          '42%':   { transform: 'scale(1.03) rotate(-4deg)' },
          '48%':   { transform: 'scale(1.03) rotate(4deg)' },
          '55%':   { transform: 'scale(1.03) rotate(0deg)' }, // End Shake 2

          // Shake 3 (+/-3deg) - starts after a brief pause
          '60%':   { transform: 'scale(1.03) rotate(0deg)' }, // Start of shake 3 (ensures rotation is reset)
          '67%':   { transform: 'scale(1.03) rotate(-3deg)' },
          '73%':   { transform: 'scale(1.03) rotate(3deg)' },
          '80%':   { transform: 'scale(1.03) rotate(0deg)' }, // End Shake 3, scale down begins

          // Scale down
          '100%':  { transform: 'scale(1) rotate(0deg)' }, // Scale down complete
        }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'cta-attention': 'cta-attention 1.5s ease-in-out 0.5s 1', 
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
