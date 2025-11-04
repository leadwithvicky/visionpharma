// config/email.ts
import { createTransport } from 'nodemailer';

export const EMAIL_CONFIG = {
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
};

export const TO_EMAIL = process.env.TO_EMAIL;

export const transporter = createTransport(EMAIL_CONFIG);

// Verify email configuration on server start
// transporter.verify((error, success) => {
//   if (error) {
//     console.error('Email configuration error:', error);
//   } else {
//     console.log('Email server is ready to send messages');
//   }
// });
// Prevent SMTP connection during Docker build or CI/CD
if (process.env.NEXT_PUBLIC_APP_ENV !== 'production') {
  transporter.verify((error, success) => {
    if (error) {
      console.error('Email configuration error:', error);
    } else {
      console.log('Email server is ready to send messages');
    }
  });
}
