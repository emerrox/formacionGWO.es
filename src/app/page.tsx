import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { CoursesSection } from '@/components/landing/courses-section';
import { ContactInfoSection } from '@/components/landing/contact-info-section';
import { ContactFormSection } from '@/components/landing/contact-form-section';
import { Footer } from '@/components/landing/footer';
import { courses } from '@/config/courses';
import type { Course } from '@/types';

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
        "name": "formacionGWO.es"
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
    "name": "Cursos GWO ofrecidos por formacionGWO.es",
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
        <CoursesSection />
        <ContactInfoSection />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
