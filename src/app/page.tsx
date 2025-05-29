
import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { GwoInfoSection } from '@/components/landing/gwo-info-section';
import { CoursesSection } from '@/components/landing/courses-section';
import { ContactInfoSection } from '@/components/landing/contact-info-section';
import { Footer } from '@/components/landing/footer';
import { courses } from '@/config/courses';
import type { Course } from '@/types';
import { Suspense } from 'react';
import { DynamicContactFormLoader } from '@/components/landing/dynamic-contact-form-loader';

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
        <Suspense fallback={
          <section id="contact-form-placeholder" className="py-16 md:py-24 bg-background text-center">
            <div className="container mx-auto px-4 md:px-6">
              <p className="text-lg font-semibold text-primary">Cargando sección de contacto...</p>
            </div>
          </section>
        }>
          <DynamicContactFormLoader />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
