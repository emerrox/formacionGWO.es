
import type { Course } from '@/types';

export const courses: Course[] = [
  {
    id: 'bst',
    title: 'Basic Safety Training (BST)',
    modules: [
      { name: 'Primeros auxilios', iconName: 'PlusCircle' },
      { name: 'Manipulación de cargas', iconName: 'Package' },
      { name: 'Concienciación del fuego', iconName: 'Flame' },
      { name: 'Trabajos en altura', iconName: 'Mountain' },
      { name: 'Supervivencia en el mar', iconName: 'LifeBuoy' }
    ],
    duration: '28h onshore / 35h offshore',
    image: 'images/bst.png', // No leading slash
    imageHint: 'safety training wind turbine',
    shortDescription: 'Entrenamiento esencial en seguridad para trabajos en la industria eólica.'
  },
  {
    id: 'bstr',
    title: 'Basic Safety Training Refresh (BSTR)',
    modules: [
      { name: 'Refresco de BST (presencial / online parcial)', iconName: 'ShieldCheck' }
    ],
    duration: '18h onshore / 25h offshore',
    image: 'images/bstr.png', // No leading slash
    imageHint: 'refresher course safety',
    shortDescription: 'Actualización de conocimientos y habilidades del BST.'
  },
  {
    id: 'slt',
    title: 'Lift Training (SLT)',
    modules: [
      { name: 'Usuario de elevadores (4h)', iconName: 'ArrowUpDown' },
      { name: 'Puesta en marcha e inspección (7h)', iconName: 'ArrowUpDown' },
      { name: 'Instalación y mantenimiento (14h)', iconName: 'ArrowUpDown' }
    ],
    duration: 'Total: 25h',
    image: 'images/lt.png', // Corrected name, no leading slash
    imageHint: 'lift training elevator',
    shortDescription: 'Formación completa para el uso y mantenimiento de elevadores.'
  },
  {
    id: 'btt',
    title: 'Basic Technical Training (BTT)',
    modules: [
      { name: 'Mecánica (13,5h)', iconName: 'Wrench' },
      { name: 'Electricidad (9h)', iconName: 'Zap' },
      { name: 'Hidráulica (8h)', iconName: 'Droplets' },
      { name: 'Instalación opcional (18h)', iconName: 'Briefcase' }
    ],
    duration: '30,5h (MEH) / 29h (MI)',
    image: 'images/btt.png', // No leading slash
    imageHint: 'technical training wind turbine',
    shortDescription: 'Capacitación técnica fundamental en mecánica, electricidad e hidráulica.'
  },
  {
    id: 'art',
    title: 'Advanced Rescue Training (ART)',
    modules: [
      { name: 'Rescate en buje, rotor y pala', iconName: 'Users' },
      { name: 'Rescate en nacelle, torre y sótano', iconName: 'Users' },
      { name: 'Versión “rescatista único”', iconName: 'Users' }
    ],
    duration: 'Combinado: 21h',
    image: 'images/art.png', // No leading slash
    imageHint: 'rescue training height',
    shortDescription: 'Técnicas avanzadas de rescate en diversos componentes de aerogeneradores.'
  },
  {
    id: 'br',
    title: 'Blade Repair (BR)',
    modules: [
      { name: 'GWO Blade Repair', iconName: 'Construction' },
      { name: 'Siemens Gamesa Blade Repair', iconName: 'Construction' }
    ],
    duration: '70h',
    image: 'images/br.png', // No leading slash
    imageHint: 'blade repair wind turbine',
    shortDescription: 'Especialización en la reparación y mantenimiento de palas de aerogeneradores.'
  },
  {
    id: 'efa',
    title: 'Enhanced First Aid (EFA)',
    modules: [
      { name: 'Primeros auxilios básico (BST) + Avanzado (EFA)', iconName: 'Stethoscope' }
    ],
    duration: '20h',
    image: 'images/efa.png', // No leading slash
    imageHint: 'first aid advanced',
    shortDescription: 'Formación avanzada en primeros auxilios para situaciones críticas.'
  },
  {
    id: 'cohe',
    title: 'Control of Hazardous Energies (CoHE)',
    modules: [
      { name: 'Seguridad básica', iconName: 'TriangleAlert' },
      { name: 'Seguridad eléctrica', iconName: 'Zap' },
      { name: 'Seguridad de fluidos a presión', iconName: 'Droplets' }
    ],
    duration: '22h',
    image: 'images/che.png', // Corrected name, no leading slash
    imageHint: 'hazardous energy control',
    shortDescription: 'Control y gestión de energías peligrosas en entornos industriales.'
  },
  {
    id: 'sls',
    title: 'Slinger Signaller (SLS)',
    modules: [
      { name: 'Señalización', iconName: 'Signal' },
      { name: 'Elevación de cargas', iconName: 'Package' },
      { name: 'Uso de polipastos', iconName: 'ArrowUpDown' }
    ],
    duration: '14h',
    image: 'images/ss.png', // Corrected name, no leading slash
    imageHint: 'slinger signaller crane',
    shortDescription: 'Capacitación para señalistas y manejo seguro de cargas.'
  },
  {
    id: 'wla',
    title: 'Wind Limited Access (WLA)',
    modules: [
      { name: 'Acceso restringido onshore/offshore', iconName: 'KeyRound' }
    ],
    duration: '7h',
    image: 'images/wla.png', // No leading slash
    imageHint: 'limited access wind farm',
    shortDescription: 'Protocolos de acceso seguro a zonas restringidas en parques eólicos.'
  },
  {
    id: 'iqt',
    title: 'Instructor Qualification Training (IQT)',
    modules: [
      { name: 'Metodologías de enseñanza para adultos', iconName: 'Presentation' }
    ],
    duration: '72h (9 días), certificado permanente',
    image: 'images/iqt.png', // No leading slash
    imageHint: 'instructor training classroom',
    shortDescription: 'Formación para cualificar instructores en estándares GWO.'
  }
];
