import { DevelopmentPhrase } from './types';

declare module 'ambient' {
  declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: number;
        NODE_ENV: DevelopmentPhrase;
        GITHUB_USER_NAME: string;
        GITHUB_API_TOKEN: string;
        DATABASE_PASSWORD: string;
        DATABASE_USERNAME: string;
        DATABASE_URL: string;
        EMAIL_PROVIDER_PASSWORD: string;
        EMAIL_PROVIDER_USERNAME: string;
        JWT_SECRET: string;
        CLOUDINARY_NAME: string;
        CLOUDINARY_API_KEY: string;
        CLOUDINARY_API_SECRET: string;
        CLOUDINARY_URL: string;
      }
    }
  }
}
