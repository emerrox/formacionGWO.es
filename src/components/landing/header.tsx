
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

const ANIMATION_DURATION = 1000; // ms, should match 'cta-attention' in tailwind.config.ts (1.0s)
const PERIODIC_ANIMATION_INTERVAL = 10000; // ms, 10 seconds

export function Header() {
  const [animateCtaButton, setAnimateCtaButton] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Effect to reset the CTA button animation after it completes
  useEffect(() => {
    if (animateCtaButton) {
      const timer = setTimeout(() => {
        setAnimateCtaButton(false);
      }, ANIMATION_DURATION);
      return () => clearTimeout(timer);
    }
  }, [animateCtaButton]);

  // Effect for periodic animation of the CTA button in the header
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!document.hidden) { // Only animate if the tab is visible
        setAnimateCtaButton(true);
      }
    }, PERIODIC_ANIMATION_INTERVAL);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);


  const handleNavLinkClick = () => {
    setIsSheetOpen(false);
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
              onClick={handleNavLinkClick}
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
