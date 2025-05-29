
import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { GwoInfoSection } from '@/components/landing/gwo-info-section';
import { CoursesSection } from '@/components/landing/courses-section';
import { ContactInfoSection } from '@/components/landing/contact-info-section';
import { Footer } from '@/components/landing/footer';
import { ContactFormSection } from '@/components/landing/contact-form-section'; // Importación directa
import { courses } from '@/config/courses';
import type { Course } from '@/types';
import { Suspense } from 'react';

// Fallback SUPER minimalista para Suspense, renderiza null para que no haya placeholder visible.
function ContactFormSuspenseFallback() {
  return null;
}


function generateJsonLd(courseList: Course[]) {
  const itemListElement = courseList.map((course, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
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
          ContactFormSection usa useSearchParams. Para exportación estática, 
          Next.js requiere que esté envuelto en Suspense.
          El fallback es null para que el formulario parezca cargar directamente en el cliente.
        */}
        <Suspense fallback={<ContactFormSuspenseFallback />}>
          <ContactFormSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
