
// TODO: Reemplaza el contenido de esta página con la política de cookies de gwocursos.es

import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16 min-h-screen">
        <article className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none bg-card p-6 sm:p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-6">Política de Cookies</h1>
          
          <p className="mb-4">
            Bienvenido a nuestra Política de Cookies. Este documento explica qué son las cookies, cómo las utilizamos en nuestro sitio web, los tipos de cookies que empleamos, la información que recopilamos mediante cookies y cómo se utiliza esa información, y cómo puedes controlar tus preferencias de cookies.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">¿Qué son las cookies?</h2>
          <p className="mb-4">
            Las cookies son pequeños archivos de texto que los sitios web que visitas colocan en tu ordenador o dispositivo móvil. Se utilizan ampliamente para que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio. Las cookies pueden ser "persistentes" o "de sesión". Las cookies persistentes permanecen en tu ordenador personal o dispositivo móvil cuando te desconectas, mientras que las cookies de sesión se eliminan tan pronto como cierras tu navegador web.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">¿Cómo utilizamos las cookies?</h2>
          <p className="mb-4">
            Utilizamos cookies para varios propósitos, incluyendo:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
            <li><strong>Cookies Esenciales:</strong> Algunas cookies son esenciales para que puedas experimentar la plena funcionalidad de nuestro sitio. Nos permiten mantener las sesiones de los usuarios y prevenir cualquier amenaza a la seguridad. No recopilan ni almacenan ninguna información personal.</li>
            <li><strong>Cookies de Rendimiento/Analíticas:</strong> Estas cookies recopilan información sobre cómo los visitantes usan un sitio web, por ejemplo, qué páginas visitan más a menudo los visitantes, y si reciben mensajes de error de las páginas web. Estas cookies no recopilan información que identifique a un visitante. Toda la información que estas cookies recopilan es agregada y, por lo tanto, anónima. Solo se utiliza para mejorar el funcionamiento del sitio web.</li>
            <li><strong>Cookies de Funcionalidad:</strong> Estas cookies permiten que el sitio web recuerde las elecciones que haces (como tu nombre de usuario, idioma o la región en la que te encuentras) y proporcionan características mejoradas y más personales. Por ejemplo, un sitio web puede proporcionarte informes meteorológicos locales o noticias de tráfico almacenando en una cookie la región en la que te encuentras actualmente.</li>
            <li><strong>Cookies de Publicidad/Segmentación:</strong> Estas cookies se utilizan para entregar anuncios más relevantes para ti y tus intereses. También se utilizan para limitar el número de veces que ves un anuncio, así como para ayudar a medir la efectividad de la campaña publicitaria. Suelen ser colocadas por redes publicitarias con el permiso del operador del sitio web.</li>
          </ul>
          
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">Tus opciones con respecto a las cookies</h2>
          <p className="mb-4">
            Tienes varias opciones para controlar o limitar cómo nosotros y terceros utilizamos las cookies:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
            <li>Puedes configurar o modificar los controles de tu navegador web para aceptar o rechazar cookies. Si eliges rechazar las cookies, aún podrás usar nuestro sitio web, aunque tu acceso a algunas funcionalidades y áreas de nuestro sitio web podría estar restringido.</li>
            <li>Para obtener más información sobre cómo gestionar y eliminar las cookies, visita aboutcookies.org o www.allaboutcookies.org.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">Cambios en nuestra Política de Cookies</h2>
          <p className="mb-4">
            Podemos actualizar esta Política de Cookies de vez en cuando para reflejar, por ejemplo, cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Por lo tanto, te recomendamos que revises esta Política de Cookies regularmente para mantenerte informado sobre nuestro uso de cookies y tecnologías relacionadas.
          </p>
          <p className="mb-4">
            La fecha en la parte superior de esta Política de Cookies indica cuándo se actualizó por última vez.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mt-6 mb-3">Contacto</h2>
          <p className="mb-4">
            Si tienes alguna pregunta sobre nuestro uso de cookies, por favor contáctanos a través de la información proporcionada en nuestra sección de contacto.
          </p>
          
          <p className="mt-8 text-sm text-muted-foreground">
            Fecha de última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
