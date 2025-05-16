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
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '5%': { transform: 'scale(1.03) rotate(0deg)' }, /* Comienza a escalar y mantiene la escala */

          /* Primera sacudida (escala: 1.03, rotación: +/-4deg) */
          '10%': { transform: 'scale(1.03) rotate(-4deg)' },
          '15%': { transform: 'scale(1.03) rotate(4deg)' },
          '20%': { transform: 'scale(1.03) rotate(0deg)' },

          /* Segunda sacudida (escala: 1.03, rotación: +/-4deg) */
          '25%': { transform: 'scale(1.03) rotate(-4deg)' },
          '30%': { transform: 'scale(1.03) rotate(4deg)' },
          '35%': { transform: 'scale(1.03) rotate(0deg)' },

          /* Pausa opcional o inicio de la fase de reducción/última sacudida */
          '50%': { transform: 'scale(1.03) rotate(0deg)' }, /* Mantiene escala antes de la última fase */

          /* Tercera sacudida (rango menor: +/-3deg) Y Reducción de Escala (de 1.03 a 1) */
          /* Esta fase es de 50% a 100% de la duración total */
          '66%': { transform: 'scale(calc(1 + 0.03 * (1 - (16/50)))) rotate(-3deg)' }, /* Escala ~1.02, -3deg */
          '82%': { transform: 'scale(calc(1 + 0.03 * (1 - (32/50)))) rotate(3deg)' },  /* Escala ~1.01, +3deg */
          '100%': { transform: 'scale(1) rotate(0deg)' }, /* Fin de la animación, escala y rotación originales */
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
