/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable import/no-extraneous-dependencies */

import { File } from 'buffer';
import { v2 as cloudinary } from 'cloudinary';
import { Request } from 'express';

const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'portfolio_api',
    format: async (req: Request, file: any) => 'png', // supports promises as well
    public_id: (req: Request, file: any) =>
      `portfolio_app_${file.originalname}`,
  },
});
// eslint-disable-next-line import/prefer-default-export
export { storage };
