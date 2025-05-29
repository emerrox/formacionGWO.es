// This file is no longer used as ContactFormSection is rendered directly
// in page.tsx, wrapped in Suspense.
// You can delete this file if the new approach works.

// 'use client';
// import dynamic from 'next/dynamic';

// // Minimal placeholder for the form section while the dynamic component loads
// function FormLoadingPlaceholder() {
//   return (
//     <section id="contact-form-placeholder" className="py-16 md:py-24 bg-background text-center">
//       <div className="container mx-auto px-4 md:px-6">
//         {/* You can use simple divs or minimal skeletons if preferred */}
//         <div className="max-w-2xl mx-auto">
//           <div className="h-8 w-48 mx-auto mb-2 bg-muted/50 rounded animate-pulse"></div>
//           <div className="h-5 w-64 mx-auto mb-8 bg-muted/50 rounded animate-pulse"></div>
//           <div className="space-y-6">
//             <div className="h-10 w-full bg-muted/50 rounded animate-pulse"></div>
//             <div className="h-10 w-full bg-muted/50 rounded animate-pulse"></div>
//             <div className="h-24 w-full bg-muted/50 rounded animate-pulse"></div>
//             <div className="h-10 w-32 bg-muted/50 rounded animate-pulse"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// const ContactFormSectionAsync = dynamic(
//   () => import('@/components/landing/contact-form-section').then(mod => mod.ContactFormSection),
//   {
//     ssr: false,
//     loading: () => <FormLoadingPlaceholder />,
//   }
// );

// export function DynamicContactFormLoader() {
//   return <ContactFormSectionAsync />;
// }
