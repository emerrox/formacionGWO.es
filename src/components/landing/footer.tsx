import Link from 'next/link';
import { Wind } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary/30 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Wind className="h-6 w-6 mr-2 text-primary" />
            <span className="font-semibold text-foreground">formacionGWO.es</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-4 md:mb-0">
            {/* Add relevant links here if needed, e.g., privacy policy */}
            {/* <Link href="/privacy-policy" className="text-sm text-foreground/70 hover:text-primary">Política de Privacidad</Link> */}
            {/* <Link href="/terms-of-service" className="text-sm text-foreground/70 hover:text-primary">Términos de Servicio</Link> */}
          </nav>
          <p className="text-sm text-foreground/70">
            &copy; {currentYear} formacionGWO.es. Todos los derechos reservados.
          </p>
        </div>
        <div className="text-center text-xs text-foreground/50 mt-4">
          Una iniciativa de <a href="https://totalhse.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Total HSE</a>.
        </div>
      </div>
    </footer>
  );
}
