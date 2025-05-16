
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CookieConsent } from '@/components/cookie-consent'; // Importar CookieConsent

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'formacionGWO.es - Cursos de Seguridad para Aerogeneradores',
  description: 'Especialistas en impartir cursos GWO (Global Wind Organisation). Seguridad y técnicas certificadas para aerogeneradores.',
  keywords: 'GWO, BST, BSTR, SLT, BTT, ART, BR, EFA, CoHE, SLS, WLA, IQT, formación, seguridad, aerogeneradores, eólica, Total HSE',
  authors: [{ name: 'formacionGWO.es' }],
  openGraph: {
    title: 'formacionGWO.es - Cursos de Seguridad para Aerogeneradores',
    description: 'Seguridad y técnicas certificadas para aerogeneradores.',
    url: 'https://formaciongwo.es', 
    siteName: 'formacionGWO.es',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <CookieConsent /> {/* Añadir CookieConsent aquí */}
        <SpeedInsights />
      </body>
    </html>
  );
}
