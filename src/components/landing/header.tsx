
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Award } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const navItems = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Qué es GWO', href: '#gwo-info' },
  { label: 'Nuestros Cursos', href: '#courses' },
  { label: 'Contacto', href: '#contact' },
];

// IDs de las secciones que deben disparar la animación al volverse visibles
const SECTIONS_TO_ANIMATE_FOR = ['gwo-info', 'courses'];

export function Header() {
  const [animateCtaButton, setAnimateCtaButton] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [triggeredSections, setTriggeredSections] = useState<Set<string>>(new Set());

  // Efecto para resetear la animación del botón CTA después de que se complete
  useEffect(() => {
    if (animateCtaButton) {
      const timer = setTimeout(() => {
        setAnimateCtaButton(false);
      }, 2500); // Duración de la animación 'cta-attention'
      return () => clearTimeout(timer);
    }
  }, [animateCtaButton]);

  // Efecto para manejar la lógica de scroll y activar la animación
  useEffect(() => {
    const handleScroll = () => {
      if (document.hidden) return; // No hacer nada si la pestaña no está activa

      for (const sectionId of SECTIONS_TO_ANIMATE_FOR) {
        if (triggeredSections.has(sectionId)) {
          continue; // Ya se animó para esta sección
        }

        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          // Condición para considerar la sección visible:
          // la parte superior de la sección está dentro del 80% superior de la altura de la ventana
          // y la parte inferior de la sección aún no ha pasado completamente por encima del borde superior de la ventana.
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

          if (isVisible) {
            setAnimateCtaButton(true);
            setTriggeredSections(prev => new Set(prev).add(sectionId));
            break; // Animar solo para la primera nueva sección visible en este evento de scroll
          }
        }
      }
    };

    // Una comprobación inicial al montar, después de un breve retardo
    const initialCheckTimeout = setTimeout(handleScroll, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('visibilitychange', handleScroll); // Re-chequear si la pestaña vuelve a ser visible

    return () => {
      clearTimeout(initialCheckTimeout);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('visibilitychange', handleScroll);
    };
  }, [triggeredSections]); // Se vuelve a ejecutar si triggeredSections cambia, aunque el listener de scroll usa el estado más reciente.

  const handleNavLinkClick = () => {
    setIsSheetOpen(false); // Solo cerrar el menú móvil
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
          <Award className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">formacionGWO.es</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavLinkClick} // No anima, solo cierra el sheet si estuviera abierto (aunque aquí no aplica)
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4 md:pr-2">
          <Button
            asChild
            className={`hidden md:inline-flex ${animateCtaButton ? 'animate-cta-attention' : ''}`}
          >
            <Link href="#contact-form">Solicita Información</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      onClick={handleNavLinkClick}
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild className="mt-4">
                    <Link href="#contact-form" onClick={handleNavLinkClick}>Solicita Información</Link>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
