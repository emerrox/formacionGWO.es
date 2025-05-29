
'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle, Loader2 } from 'lucide-react';
import { z } from 'zod';

// Moved Zod schema here from actions.ts
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }).max(100),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }).max(5000),
});

type FieldErrors = z.inferFlattenedErrors<typeof contactFormSchema>['fieldErrors'];

export function ContactForm({ initialMessage = '' }: { initialMessage?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors | undefined>(undefined);
  const [isSuccess, setIsSuccess] = useState(false);


  useEffect(() => {
    const messageTextarea = formRef.current?.elements.namedItem('message') as HTMLTextAreaElement | null;
    if (messageTextarea && initialMessage) {
      messageTextarea.value = `Estoy interesado/a en el curso: ${initialMessage}\n\n`;
    }
  }, [initialMessage]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setFormMessage(null);
    setFieldErrors(undefined);
    setIsSuccess(false);

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const messageValue = formData.get('message') as string;

    const validatedFields = contactFormSchema.safeParse({ name, email, message: messageValue });

    if (!validatedFields.success) {
      setFieldErrors(validatedFields.error.flatten().fieldErrors);
      setFormMessage('Error de validación. Por favor, corrige los campos marcados.');
      setIsLoading(false);
      toast({
        title: 'Error de Validación',
        description: 'Por favor, revisa los campos del formulario.',
        variant: 'destructive',
      });
      return;
    }
    
    // Append any other necessary fields for the PHP script if needed
    // formData.append('form_type', 'contact_gwo'); // Example if PHP script needs it

    try {
      const response = await fetch("https://totalhse.com/hse/enviarcorreo_cursosirata.php", {
        method: "POST",
        body: formData,
        mode: "cors", // Browser will perform a preflight request for CORS
      });

      setIsLoading(false);

      if (response.ok) {
        // Assuming PHP script might return plain text or simple JSON
        // For a static site, we might not get detailed JSON back easily if CORS is restrictive
        // or if the PHP script isn't designed for it.
        // The simplest success case is response.ok being true.
        setIsSuccess(true);
        const successMessage = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
        setFormMessage(successMessage);
        toast({
          title: 'Mensaje Enviado',
          description: successMessage,
        });
        formRef.current?.reset();
        const messageTextarea = formRef.current?.elements.namedItem('message') as HTMLTextAreaElement | null;
        if (messageTextarea && initialMessage) { // Re-apply initial message if any after reset
           messageTextarea.value = `Estoy interesado/a en el curso: ${initialMessage}\n\n`;
        }

      } else {
        // Handle HTTP errors (e.g., 404, 500)
        // Try to get more info, but it might be opaque due to CORS
        let errorDetails = `Error del servidor: ${response.status}`;
        try {
            const errorText = await response.text();
            errorDetails = errorText || errorDetails;
        } catch (e) {
            // Could not get error text
        }
        setFormMessage(errorDetails);
        toast({
          title: 'Error del Servidor',
          description: errorDetails,
          variant: 'destructive',
        });
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error al enviar el formulario:', error);
      const networkErrorMsg = 'Hubo un error inesperado al enviar el formulario. Revisa tu conexión e inténtalo de nuevo.';
      setFormMessage(networkErrorMsg);
      toast({
        title: 'Error de Red',
        description: networkErrorMsg,
        variant: 'destructive',
      });
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="block text-sm font-medium text-foreground">Nombre Completo</Label>
        <Input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-md border-border shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          aria-describedby="name-error"
        />
        {fieldErrors?.name && (
          <p id="name-error" className="mt-1 text-sm text-destructive flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" /> {fieldErrors.name.join(', ')}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-foreground">Correo Electrónico</Label>
        <Input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border-border shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          aria-describedby="email-error"
        />
        {fieldErrors?.email && (
          <p id="email-error" className="mt-1 text-sm text-destructive flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" /> {fieldErrors.email.join(', ')}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium text-foreground">Mensaje</Label>
        <Textarea
          name="message"
          id="message"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border-border shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          aria-describedby="message-error"
          defaultValue={initialMessage ? `Estoy interesado/a en el curso: ${initialMessage}\n\n` : ''}
        />
        {fieldErrors?.message && (
          <p id="message-error" className="mt-1 text-sm text-destructive flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" /> {fieldErrors.message.join(', ')}
          </p>
        )}
      </div>

      {formMessage && !isSuccess && (
        <div className={`rounded-md p-3 text-sm flex items-start ${isSuccess ? 'bg-green-100 text-green-700' : 'bg-destructive/10 text-destructive'}`}>
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <div>
            <h3 className="font-medium">{isSuccess ? 'Éxito' : 'Error'}</h3>
            <p>{formMessage}</p>
          </div>
        </div>
      )}
      
      {formMessage && isSuccess && (
         <div className="rounded-md bg-green-100 p-3 text-sm text-green-700 flex items-start">
           {/* Using a generic check or success icon could be better if available */}
           <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" /> {/* Placeholder, ideally a success icon */}
           <div>
             <h3 className="font-medium">Éxito</h3>
            <p>{formMessage}</p>
           </div>
         </div>
      )}


      <Button type="submit" className="w-full sm:w-auto" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          'Enviar Mensaje'
        )}
      </Button>
    </form>
  );
}
