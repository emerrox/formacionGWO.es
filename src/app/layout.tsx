
import type { Metadata } from 'next';
// Removed Geist font import
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
// import { SpeedInsights } from "@vercel/speed-insights/next" // Removed
import { CookieConsent } from '@/components/cookie-consent';

// Removed geistSans constant

export const metadata: Metadata = {
  title: 'gwotraining.es - Cursos de Seguridad para Aerogeneradores',
  description: 'Especialistas en impartir cursos GWO (Global Wind Organisation). Seguridad y técnicas certificadas para aerogeneradores.',
  keywords: 'GWO, BST, BSTR, SLT, BTT, ART, BR, EFA, CoHE, SLS, WLA, IQT, formación, seguridad, aerogeneradores, eólica, Total HSE',
  authors: [{ name: 'gwotraining.es' }],
  openGraph: {
    title: 'gwotraining.es - Cursos de Seguridad para Aerogeneradores',
    description: 'Seguridad y técnicas certificadas para aerogeneradores.',
    url: 'https://gwotraining.es',
    siteName: 'gwotraining.es',
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
      {/* Removed Geist font variable from className */}
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <CookieConsent />
        {/* <SpeedInsights /> Removed */}
      </body>
    </html>
  );
}
