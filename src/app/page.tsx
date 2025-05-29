
import { Suspense } from 'react';
import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { GwoInfoSection } from '@/components/landing/gwo-info-section';
import { CoursesSection } from '@/components/landing/courses-section';
import { ContactInfoSection } from '@/components/landing/contact-info-section';
import { Footer } from '@/components/landing/footer';
import { courses } from '@/config/courses';
import type { Course } from '@/types';
import { DynamicContactFormLoader } from '@/components/landing/dynamic-contact-form-loader';

// Fallback for the main Suspense boundary around DynamicContactFormLoader - This function is no longer used directly in Suspense fallback
// function ContactFormSuspenseFallback() {
//   return (
//     <section id="contact-form-suspense-fallback" className="py-16 md:py-24 bg-background">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="max-w-2xl mx-auto text-center p-6 md:p-8 border bg-card shadow-xl rounded-lg">
//           <h2 className="text-2xl font-bold text-primary mb-2">Cargando Formulario</h2>
//           <p className="text-foreground/80">Un momento, por favor...</p>
//         </div>
//       </div>
//     </section>
//   );
// }

function generateJsonLd(courseList: Course[]) {
  const itemListElement = courseList.map((course, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": course.title,
      "description": `${course.shortDescription || ''} Módulos: ${course.modules.map(m => m.name).join('; ')}. Duración: ${course.duration}.`,
      "image": course.image, // Assuming these paths are like "images/course.png"
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
          <section className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-2xl mx-auto text-center p-8 border bg-card shadow-lg rounded-lg">
                <h2 className="text-xl font-semibold text-primary">Cargando formulario...</h2>
              </div>
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
