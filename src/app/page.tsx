import { Suspense } from 'react';
import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { GwoInfoSection } from '@/components/landing/gwo-info-section';
import { CoursesSection } from '@/components/landing/courses-section';
import { ContactInfoSection } from '@/components/landing/contact-info-section';
import { ContactFormSection } from '@/components/landing/contact-form-section';
import { Footer } from '@/components/landing/footer';
import { courses } from '@/config/courses';
import type { Course } from '@/types';
import { Skeleton } from '@/components/ui/skeleton'; // Using Skeleton for a simple fallback

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
      // "offers": { // If pricing is available
      //   "@type": "Offer",
      //   "priceCurrency": "EUR",
      //   "price": course.price || "0" // Replace with actual price if available
      // }
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

function ContactFormFallback() {
  return (
    <section id="contact-form-loading" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto shadow-xl rounded-lg p-6 md:p-8 border bg-card">
          <div className="text-center mb-6">
            <Skeleton className="h-8 w-3/4 mx-auto mb-2" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
          </div>
          <div className="space-y-6">
            <div>
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div>
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div>
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-20 w-full" />
            </div>
            <Skeleton className="h-10 w-1/3" />
          </div>
        </div>
      </div>
    </section>
  );
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
        <Suspense fallback={<ContactFormFallback />}>
          <ContactFormSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
