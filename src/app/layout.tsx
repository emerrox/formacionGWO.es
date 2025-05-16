import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Geist_Mono is not used in the landing page typically
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
    url: 'https://formaciongwo.es', // Replace with actual domain
    siteName: 'formacionGWO.es',
    // images: [ // Add a relevant image for social sharing
    //   {
    //     url: 'https://formaciongwo.es/og-image.png', // Replace with actual image URL
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
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
        <SpeedInsights />
      </body>
    </html>
  );
}
