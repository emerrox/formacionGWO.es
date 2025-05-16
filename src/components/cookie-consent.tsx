
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Cookie } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'accepted') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <Card className="w-full max-w-3xl mx-auto shadow-2xl border-t-4 border-primary">
        <CardHeader className="flex flex-row items-start space-x-4 p-4 sm:p-6">
          <div className="mt-1">
            <Cookie className="h-8 w-8 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg sm:text-xl font-semibold">Tu Privacidad es Importante</CardTitle>
            <CardDescription className="text-sm text-muted-foreground mt-1">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestro uso de cookies.
              {/* TODO: Reemplaza este texto con el contenido de la política de cookies de gwocursos.es si es necesario */}
            </CardDescription>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col sm:flex-row items-center justify-end gap-3 p-4 sm:p-6 bg-secondary/30 rounded-b-lg">
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/politica-de-cookies">Más información</Link>
          </Button>
          <Button onClick={handleAccept} className="w-full sm:w-auto">
            Aceptar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
