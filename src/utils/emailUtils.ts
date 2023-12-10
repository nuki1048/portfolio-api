import dotenv from 'dotenv';

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
