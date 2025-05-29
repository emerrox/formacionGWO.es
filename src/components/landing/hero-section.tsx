
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full py-20 md:py-32 bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary">
            gwotraining.es
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 sm:text-xl">
            Seguridad y técnicas certificadas para aerogeneradores
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="animate-cta-attention">
              <Link href="#contact-form">
                Solicita Información
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 sm:mt-24">
          <div className="relative aspect-[2/1] w-full max-w-4xl mx-auto overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="images/portada.png" // No leading slash
              alt="Trabajadores en un aerogenerador realizando mantenimiento"
              fill
              style={{ objectFit: 'cover' }}
              priority
              data-ai-hint="wind energy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
