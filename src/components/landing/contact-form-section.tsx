'use client';
import { ContactForm } from './contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';


export function ContactFormSection() {
  const searchParams = useSearchParams();
  const [initialMessage, setInitialMessage] = useState('');

  useEffect(() => {
    const courseName = searchParams.get('course');
    if (courseName) {
      setInitialMessage(courseName);
    }
  }, [searchParams]);

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl text-primary">
              Solicita Información
            </CardTitle>
            <CardDescription className="mt-2 text-md text-foreground/80">
              Rellena el formulario y te contactaremos a la brevedad.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm initialMessage={initialMessage} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
