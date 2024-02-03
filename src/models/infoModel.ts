import mongoose, { Schema } from 'mongoose';

export interface IInfo {
  message: string;
  slug: string;
}

const infoSchema = new Schema<IInfo>(
  {
    message: {
      required: true,
      type: String,
    },
    slug: {
      required: true,
      type: String,
      unique: true,
    },
  },
  { collection: 'info' },
);

const Info = mongoose.model('Info', infoSchema);

export default Info;
