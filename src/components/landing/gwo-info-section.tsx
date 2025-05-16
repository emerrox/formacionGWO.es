import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, ShieldCheck, TrendingUp, Globe, DollarSign, Zap } from 'lucide-react';

const benefits = [
  {
    icon: BadgeCheck,
    title: 'Formación Estandarizada',
    description: 'Asegura un nivel reconocido de competencia en seguridad en toda la industria eólica.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad Mejorada',
    description: 'Reduce los riesgos y aumenta la seguridad para los técnicos que trabajan en aerogeneradores.',
  },
  {
    icon: TrendingUp,
    title: 'Mayor Eficiencia',
    description: 'Los trabajadores con certificación GWO están listos para trabajar, minimizando las necesidades de formación específica del sitio.',
  },
  {
    icon: Globe,
    title: 'Reconocimiento Global',
    description: 'Los certificados GWO son aceptados en todo el mundo, facilitando la movilidad laboral.',
  },
  {
    icon: DollarSign,
    title: 'Reducción de Costos',
    description: 'Los estándares comunes pueden llevar a menores costos de formación para las empresas.',
  },
  {
    icon: Zap,
    title: 'Respuesta Rápida',
    description: 'Prepara a los técnicos para actuar de manera efectiva en situaciones de emergencia.'
  }
];

export function GwoInfoSection() {
  return (
    <section id="gwo-info" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            ¿Qué es GWO?
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            La Global Wind Organisation (GWO) es una entidad sin ánimo de lucro fundada por fabricantes y propietarios de aerogeneradores. GWO desarrolla y mantiene estándares comunes de la industria para la formación en seguridad y procedimientos de emergencia, cruciales para un entorno de trabajo seguro y eficiente en el sector eólico.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-left shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="flex-row items-start gap-4 space-y-0 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shrink-0">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-foreground/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
