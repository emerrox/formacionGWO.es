
'use client';

import dynamic from 'next/dynamic';
import type { ComponentType } from 'react';

// Define a fallback component for loading state
function ContactFormLoadingFallback() {
  return (
    <section id="contact-form-loading" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center p-6 md:p-8 border bg-card shadow-xl rounded-lg">
          <p className="text-lg font-semibold text-primary">Cargando formulario de contacto...</p>
          <p className="text-sm text-muted-foreground mt-2">Un momento, por favor.</p>
        </div>
      </div>
    </section>
  );
}

// Dynamically import ContactFormSection with SSR turned off
const ContactFormSection = dynamic(
  () => import('@/components/landing/contact-form-section').then(mod => mod.ContactFormSection),
  {
    ssr: false,
    loading: () => <ContactFormLoadingFallback />,
  }
);

export function DynamicContactFormLoader() {
  return <ContactFormSection />;
}
