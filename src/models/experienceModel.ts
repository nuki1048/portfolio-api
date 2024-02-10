import mongoose, { Schema } from 'mongoose';

export enum EmailStatus {
  Recevied = 'received',
  Answered = 'answered',
  Error = 'error',
}

export interface IExperience {
  logo?: string;
  workTime: (Date | null)[];
  position: string;
  companyName: string;
  commitments: string[];
}

const PLACEHOLDER_PHOTO = 'https://placehold.co/100x30.png';

const experienceSchema = new Schema<IExperience>(
  {
    logo: {
      type: String,
      default: PLACEHOLDER_PHOTO,
      required: false,
    },
    workTime: {
      type: [Date],
      required: [true, 'Experience should have a work time in this position.'],
      validate: {
        validator: function (v: Date[]) {
          return v.length === 2 && v[0] instanceof Date;
        },
        message:
          'Work time should be length of 2, start and end of work experience and first item should be always type of Date.',
      },
    },
    position: {
      type: String,
      required: [true, 'Experince should have a position name.'],
    },
    commitments: {
      type: [String],
      required: [true, 'Experience should have a commitments.'],
    },
    companyName: {
      type: String,
      required: [true, 'Experience should have a company name.'],
      unique: true,
    },
  },
  { collection: 'experience' },
);

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;
