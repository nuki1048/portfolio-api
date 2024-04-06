import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: './config.env' });

// eslint-disable-next-line import/prefer-default-export
export const EMAIL_CONFIG = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_PROVIDER_USERNAME,
    pass: process.env.EMAIL_PROVIDER_PASSWORD,
  },
};

interface EmailOptions {
  email: string | string[];
  subject: string;
  message: string;
}
// eslint-disable-next-line import/prefer-default-export

export const sendEmail = async (options: EmailOptions) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: false,
    logger: true,
    auth: {
      user: process.env.EMAIL_PROVIDER_USERNAME,
      pass: process.env.EMAIL_PROVIDER_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'Nikita Chabaniuk <nik456618@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html:
  };

  await transporter.sendMail(mailOptions);
};
