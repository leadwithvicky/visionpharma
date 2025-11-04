// services/emailService.ts
import { transporter, TO_EMAIL, EMAIL_CONFIG } from '../config/email';

export interface JobApplication {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  gender: string;
  resume: File;
}

export class EmailService {
  static async validateConfig() {
    if (!EMAIL_CONFIG.auth.user || !EMAIL_CONFIG.auth.pass || !TO_EMAIL) {
      throw new Error('Missing email configuration');
    }
  }

  static validateApplication(application: JobApplication): void {
    const { fullName, email, phone, position, gender, resume } = application;

    if (!fullName || typeof fullName !== 'string') {
      throw new Error('Invalid full name');
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error('Invalid email address');
    }
    if (!phone || typeof phone !== 'string') {
      throw new Error('Invalid phone number');
    }
    if (!position || typeof position !== 'string') {
      throw new Error('Invalid position');
    }
    if (!gender || typeof gender !== 'string') {
      throw new Error('Invalid gender');
    }
    if (!resume || !(resume instanceof File)) {
      throw new Error('Invalid resume file');
    }
  }

  static async sendJobApplication(application: JobApplication) {
    // Validate application data
    this.validateApplication(application);

    const { fullName, email, phone, position, gender, resume } = application;

    const fileBuffer = Buffer.from(await resume.arrayBuffer());
    const fileExtension = resume.name.split('.').pop() || '';
    const sanitizedFileName = `${fullName.replace(
      /[^a-zA-Z0-9]/g,
      '_'
    )}_resume.${fileExtension}`;

    const mailOptions = {
      from: `"Job Application" <${EMAIL_CONFIG.auth.user}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Job Application: ${position} - ${fullName}`,
      text: this.generatePlainText(application),
      html: this.generateHtmlContent(application),
      attachments: [
        {
          filename: sanitizedFileName,
          content: fileBuffer,
          contentType: resume.type,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
  }

  private static generatePlainText(application: JobApplication) {
    const { fullName, email, phone, position, gender } = application;
    return `
      New job application received:
      Full Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      Position: ${position}
      Gender: ${gender}
    `;
  }

  private static generateHtmlContent(application: JobApplication) {
    const { fullName, email, phone, position, gender } = application;
    return `
      <h2>New Job Application</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Full Name:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${fullName}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Position:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${position}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Gender:</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${gender}</td>
        </tr>
      </table>
    `;
  }
}
