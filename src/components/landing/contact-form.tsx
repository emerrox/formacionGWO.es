'use client';

import { useEffect, useRef, useActionState } from 'react';
import type { ContactFormState } from '@/types';
import { submitContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

const initialState: ContactFormState = {
  message: '',
  isSuccess: false,
  isError: false,
};

export function ContactForm({ initialMessage = '' }: { initialMessage?: string }) {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.isSuccess) {
      toast({
        title: 'Mensaje Enviado',
        description: state.message || 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        variant: 'default',
      });
      formRef.current?.reset();
    } else if (state.isError && state.message) {
      toast({
        title: 'Error al Enviar',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);
  
  useEffect(() => {
    const messageTextarea = formRef.current?.elements.namedItem('message') as HTMLTextAreaElement | null;
    if (messageTextarea && initialMessage) {
      messageTextarea.value = `Estoy interesado/a en el curso: ${initialMessage}\n\n`;
    }
  }, [initialMessage]);


  return (
    <form ref={formRef} action={formAction} className="space-y-6">
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
        {state.errors?.name && (
          <p id="name-error" className="mt-1 text-sm text-destructive flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" /> {state.errors.name.join(', ')}
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
        {state.errors?.email && (
          <p id="email-error" className="mt-1 text-sm text-destructive flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" /> {state.errors.email.join(', ')}
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
        />
        {state.errors?.message && (
          <p id="message-error" className="mt-1 text-sm text-destructive flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" /> {state.errors.message.join(', ')}
          </p>
        )}
      </div>

      {state.errors?.general && (
        <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive flex items-start">
          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
          <div>
            <h3 className="font-medium">Error</h3>
            {state.errors.general.map((error, i) => <p key={i}>{error}</p>)}
          </div>
        </div>
      )}

      <Button type="submit" className="w-full sm:w-auto" disabled={isPending}>
        {isPending ? (
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
