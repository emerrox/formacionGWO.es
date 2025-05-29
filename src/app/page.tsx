
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { GwoInfoSection } from '@/components/landing/gwo-info-section';
import { CoursesSection } from '@/components/landing/courses-section';
import { ContactInfoSection } from '@/components/landing/contact-info-section';
import { Footer } from '@/components/landing/footer';
import { courses } from '@/config/courses';
import type { Course } from '@/types';

// Fallback component
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

function generateJsonLd(courseList: Course[]) {
  const itemListElement = courseList.map((course, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product", // Using Product type as Course has limited properties in schema.org widely supported
      "name": course.title,
      "description": `${course.shortDescription || ''} Módulos: ${course.modules.map(m => m.name).join('; ')}. Duración: ${course.duration}.`,
      "image": course.image,
      "brand": {
        "@type": "Brand",
        "name": "gwotraining.es"
      },
    }
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Cursos GWO ofrecidos por gwotraining.es",
    "description": "Lista de cursos de formación GWO para la industria eólica.",
    "itemListElement": itemListElement,
  };
}


export default function HomePage() {
  const jsonLd = generateJsonLd(courses);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <GwoInfoSection />
        <CoursesSection />
        <ContactInfoSection />
        {/*
          The ContactFormSection is now dynamically imported with ssr: false,
          and its 'loading' prop handles the fallback state.
        */}
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
