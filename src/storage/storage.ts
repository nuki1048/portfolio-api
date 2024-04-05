/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-import-module-exports */
/* eslint-disable import/no-extraneous-dependencies */

import { v2 as cloudinary } from 'cloudinary';

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
    format: async (req, file) => 'png', // supports promises as well
    public_id: (req, file) => `portfolio_app_${file.originalname}`,
  },
});
// eslint-disable-next-line import/prefer-default-export
export { storage };
