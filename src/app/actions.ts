'use server';

import { z } from 'zod';
import { sendMail, createHtmlEmailBody, createPlainTextEmailBody } from '@/lib/nodemailer';
import type { ContactFormState } from '@/types';
// import { analyzeEmailContentFlow } from '@/ai/flows/emailAnalyzer'; // Hypothetical AI flow import

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }).max(100),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }).max(5000),
});

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Error de validación.',
      errors: validatedFields.error.flatten().fieldErrors,
      isSuccess: false,
      isError: true,
    };
  }

  const { name, email, message } = validatedFields.data;

  // Placeholder for AI analysis
  // try {
  //   const analysisResult = await analyzeEmailContentFlow({ emailContent: message, senderEmail: email });
  //   console.log('AI Analysis Result:', analysisResult);
  //   // Use analysisResult.urgency and analysisResult.tags for further processing
  // } catch (aiError) {
  //   console.error('AI analysis failed:', aiError);
  //   // Decide if this should block email sending or just log
  // }

  const mailSubject = `Nuevo mensaje de ${name}`;
  const mailHtmlBody = createHtmlEmailBody(name, email, message);
  const mailTextBody = createPlainTextEmailBody(name, email, message);
  
  const mailRecipient = process.env.CONTACT_FORM_RECIPIENT || 'app@totalhse.com';

  try {
    const emailResult = await sendMail({
      to: mailRecipient,
      subject: mailSubject,
      text: mailTextBody,
      html: mailHtmlBody,
    });

    if (emailResult.success) {
      return {
        message: '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.',
        isSuccess: true,
        isError: false,
      };
    } else {
      console.error('Server action: Failed to send email from sendMail function:', emailResult.error);
      return {
        message: emailResult.error || 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.',
        errors: { general: [emailResult.error || 'Error desconocido al enviar el correo.'] },
        isSuccess: false,
        isError: true,
      };
    }
  } catch (error) {
    console.error('Server action: Unexpected error during email sending process:', error);
    let errorMessage = 'Hubo un problema inesperado al enviar tu mensaje.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      message: errorMessage,
      errors: { general: [errorMessage] },
      isSuccess: false,
      isError: true,
    };
  }
}
