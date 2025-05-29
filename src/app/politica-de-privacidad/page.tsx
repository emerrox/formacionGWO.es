
'use client'; // Required for useState and useEffect

import { useState, useEffect } from 'react';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function PoliticaDePrivacidadPage() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16 min-h-screen">
        <Card className="shadow-lg">
          <CardContent className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Política de Privacidad</h1>
            
            <p className="mb-4">
              Para poder ofrecerte nuestros productos y servicios de la manera más eficaz para ti, debemos recoger ciertos datos. Esta información la tratamos de forma responsable para que tus datos estén seguros y sigan siendo privados.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">Responsable del tratamiento de datos</h2>
            <p className="mb-4">
              Tratamiento de los datos de clientes
            </p>

            <h3 className="text-lg sm:text-xl font-medium text-foreground mt-4 mb-2">Información básica sobre protección de datos</h3>
            <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
              <li><strong>Responsable:</strong> TOTAL HEALTH SAFETY ENVIRONMENT S.L.</li>
              <li><strong>Finalidad:</strong> Prestar los servicios solicitados y enviar comunicaciones comerciales vía electrónica</li>
              <li>
                <strong>Legitimación:</strong>
                <ul className="list-disc list-inside ml-4">
                  <li>Ejecución de un contrato.</li>
                  <li>Interés legítimo del Responsable.</li>
                </ul>
              </li>
              <li>
                <strong>Destinatarios:</strong> Están previstas cesiones de datos a:
                <ul className="list-disc list-inside ml-4">
                  <li>Administración Tributaria;</li>
                  <li>Entidades financieras.</li>
                </ul>
              </li>
              <li><strong>Derechos:</strong> Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, indicados en la información adicional, que puede ejercer dirigiéndose a <a href="mailto:info@totalhse.com" className="text-primary hover:underline">info@totalhse.com</a>.</li>
              <li><strong>Procedencia:</strong> El propio interesado.</li>
              <li><strong>Información adicional:</strong> Puede consultar información adicional y detallada sobre protección de datos aquí: enviando un correo electrónico <a href="mailto:info@totalhse.com" className="text-primary hover:underline">info@totalhse.com</a>.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">¿Quién es el responsable del tratamiento de sus datos personales?</h2>
            <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
              <li><strong>Identidad:</strong> Total Health Safety Environment S.L.</li>
              <li><strong>CIF:</strong> B71325575.</li>
              <li><strong>Domicilo social:</strong> Polígono Industrial El Mallatón, Parcela 12, Calle B-9. 31579, Cárcar, Navarra.</li>
              <li><strong>Teléfono:</strong> 948674881.</li>
              <li><strong>Correo electrónico:</strong> <a href="mailto:info@totalhse.com" className="text-primary hover:underline">info@totalhse.com</a></li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">¿Con qué finalidad recopilamos sus datos?</h2>
            <p className="mb-4">
              En TOTAL HEALTH SAFETY ENVIRONMENT S.L. tratamos la información que nos facilitan las personas interesadas con el fin de realizar la gestión administrativa, contable y fiscal de los servicios solicitados. También se emplearán para desarrollar y enviar comunicaciones comerciales sobre nuestros productos y servicios, para mantener y gestionar la relación con las personas interesadas. En el caso de que no facilite sus datos personales, no podremos cumplir con las funcionalidades descritas anteriormente.
            </p>
            <p className="mb-4">
              Según caso, se podrán hacer valoraciones automáticas, obtener perfiles y segmentar a las personas interesadas para así poder personalizar el trato a medida de las características y necesidades de dichas personas interesadas, con el objetivo de ofrecer la mejor experiencia del cliente posible.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">¿Por cuánto tiempo conservaremos sus datos?</h2>
            <p className="mb-4">
              Los datos se conservarán mientras el interesado no solicite su supresión, y en su caso, durante los años necesarios para cumplir con las obligaciones legales.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">¿Cuál es la legitimación para el tratamiento de sus datos?</h2>
            <p className="mb-2">Le indicamos la base legal para el tratamiento de sus datos:</p>
            <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
              <li><strong>Ejecución de un contrato:</strong> Realizar la gestión administrativa, contable y fiscal de los servicios solicitados.</li>
              <li><strong>Interés legítimo del Responsable:</strong> Enviar comunicaciones comerciales vía electrónica sobre nuestros productos y servicios.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">¿A qué destinatarios se comunicarán sus datos?</h2>
            <p className="mb-2">Los datos se comunicarán a los siguientes destinatarios:</p>
            <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
              <li>Administración Tributaria, con la finalidad de cumplir con las obligaciones legales (requisito legal).</li>
              <li>Entidades financieras, con la finalidad de girar los recibos correspondientes (requisito contractual).</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-medium text-foreground mt-4 mb-2">Transferencias de datos a terceros países</h3>
            <p className="mb-4">
              No están previstas transferencias de datos a terceros países.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">¿Cuáles son sus derechos cuando nos facilita sus datos?</h2>
            <p className="mb-4">
              Cualquier persona tiene derecho a obtener confirmación sobre si en TOTAL HEALTH SAFETY ENVIRONMENT S.L. estamos tratando, o no, datos personales que les conciernan.
            </p>
            <p className="mb-4">
              Las personas interesadas tienen derecho a acceder a sus datos personales, así como a solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos. Igualmente tiene derecho a la portabilidad de sus datos.
            </p>
            <p className="mb-4">
              En determinadas circunstancias, los interesados podrán solicitar la limitación del tratamiento de sus datos, en cuyo caso únicamente los conservaremos para el ejercicio o la defensa de reclamaciones.
            </p>
            <p className="mb-4">
              En determinadas circunstancias y por motivos relacionados con su situación particular, los interesados podrán oponerse al tratamiento de sus datos. En este caso, TOTAL HEALTH SAFETY ENVIRONMENT S.L. dejará de tratar los datos, salvo por motivos legítimos imperiosos, o el ejercicio o la defensa de posibles reclamaciones.
            </p>
            <p className="mb-4">
              Podrá ejercitar materialmente sus derechos de la siguiente forma: dirigiéndose a <a href="mailto:info@totalhse.com" className="text-primary hover:underline">info@totalhse.com</a>.
            </p>
            <p className="mb-4">
              Cuando se realice el envío de comunicaciones comerciales utilizando como base jurídica el interés legítimo del responsable, el interesado podrá oponerse al tratamiento de sus datos con ese fin.
            </p>
            <p className="mb-4">
              En caso de que sienta vulnerados sus derechos en lo concerniente a la protección de sus datos personales, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos, puede presentar una reclamación ante la Autoridad de Control en materia de Protección de Datos competente a través de su sitio web: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aepd.es</a>.
            </p>
            
            {/* El usuario repitió la pregunta "¿Cuáles son sus derechos cuando nos facilita sus datos?" La voy a omitir ya que el contenido es el mismo. */}

            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">¿De dónde obtenemos sus datos?</h2> {/* Cambié el título para que tenga sentido con la respuesta */}
            <p className="mb-2">Los datos personales que tratamos en TOTAL HEALTH SAFETY ENVIRONMENT S.L. proceden de: El propio interesado.</p>
            <p className="mb-2">Las categorías de datos que se tratan son:</p>
            <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
              <li>Datos identificativos.</li>
              <li>Direcciones postales y electrónicas.</li>
              <li>Información comercial.</li>
              <li>Datos económicos.</li>
            </ul>
            <p className="mb-4">
              Se tratan las siguientes categorías de datos especiales: salud
            </p>

            {currentDate && (
              <p className="mt-8 text-sm text-muted-foreground">
                Fecha de última actualización: {currentDate}
              </p>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
}
