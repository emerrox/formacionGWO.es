import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Dirección',
    value: 'Calle de Luis I, 78, Vallecas, 28031 Madrid',
    href: 'https://maps.google.com/?q=Calle de Luis I, 78, Vallecas, 28031 Madrid',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@totalhse.com',
    href: 'mailto:info@totalhse.com',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    value: '+34 664 68 13 85',
    href: 'tel:+34664681385',
  },
];

export function ContactInfoSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Ponte en Contacto
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para más información sobre nuestros cursos GWO.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {contactDetails.map((detail) => (
            <Card key={detail.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                  <detail.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold">{detail.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  {detail.value}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
