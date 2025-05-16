
import Link from 'next/link';
import { Award } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary/30 border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Award className="h-6 w-6 mr-2 text-primary" />
            <span className="font-semibold text-foreground">formacionGWO.es</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-4 md:mb-0">
            <Link href="/politica-de-cookies" className="text-sm text-foreground/70 hover:text-primary">Política de Cookies</Link>
            <Link href="/politica-de-privacidad" className="text-sm text-foreground/70 hover:text-primary">Política de Privacidad</Link>
            {/* <Link href="/aviso-legal" className="text-sm text-foreground/70 hover:text-primary">Aviso Legal</Link> */}
          </nav>
          <p className="text-sm text-foreground/70">
            &copy; {currentYear} formacionGWO.es. Todos los derechos reservados.
          </p>
        </div>
        <div className="text-center text-xs text-foreground/50 mt-6 pt-4 border-t border-border/30">
          Powered by <a href="https://totalhse.com" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary">Total HSE</a>.
        </div>
      </div>
    </footer>
  );
}
