import nodemailer from 'nodemailer';

const smtpConfig = {
  host: process.env.SMTP_HOST || 'smtp.mail.ovh.net',
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: process.env.SMTP_SECURE === 'true' || true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || 'app@totalhse.com',
    pass: process.env.SMTP_PASS || 'trabajosenaltura23', // IMPORTANT: Use environment variables for sensitive data
  },
};

const transporter = nodemailer.createTransport(smtpConfig);

interface MailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendMail({ to, subject, text, html }: MailOptions) {
  const mailOptions = {
    from: process.env.SMTP_FROM || smtpConfig.auth.user, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    // It's good practice to not expose detailed error messages to the client.
    // Log them securely on the server.
    let errorMessage = 'Failed to send email.';
    if (error instanceof Error) {
        // Basic error categorization might be useful for logs
        if ((error as any).code === 'EENVELOPE') {
            errorMessage = 'Invalid email address(es) in envelope.';
        } else if ((error as any).code === 'EAUTH') {
            errorMessage = 'Email authentication failed. Check SMTP credentials.';
        }
    }
    return { success: false, error: errorMessage };
  }
}

// Helper to create a simple HTML email body
export function createHtmlEmailBody(name: string, email: string, message: string): string {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #007BA7;">Nuevo Mensaje de Contacto</h2>
      <p>Has recibido un nuevo mensaje a través del formulario de contacto de gwotraining.es.</p>
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Mensaje:</strong></p>
      <p style="padding: 10px; border-left: 3px solid #007BA7; background-color: #f9f9f9;">
        ${message.replace(/\n/g, '<br>')}
      </p>
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p style="font-size: 0.9em; color: #777;">
        Este es un mensaje automático enviado desde gwotraining.es.
      </p>
    </div>
  `;
}

export function createPlainTextEmailBody(name: string, email: string, message: string): string {
  return `
Nuevo Mensaje de Contacto
--------------------------
Has recibido un nuevo mensaje a través del formulario de contacto de gwotraining.es.

Nombre: ${name}
Email: ${email}
Mensaje:
${message}
--------------------------
Este es un mensaje automático enviado desde gwotraining.es.
  `;
}
