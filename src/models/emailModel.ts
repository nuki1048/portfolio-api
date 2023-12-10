import mongoose, { Schema } from 'mongoose';

export enum EmailStatus {
  Recevied = 'received',
  Answered = 'answered',
  Error = 'error',
}

export interface IEmail {
  email: string | string[];
  message: string;
  status?: EmailStatus;
}

const emailSchema = new Schema<IEmail>(
  {
    email: {
      type: Schema.Types.Mixed,
      required: [true, 'Email must have a receiver email'],
    },
    message: {
      type: String,
      required: [true, 'Email must have a message'],
    },
    status: {
      type: String,
      enum: Object.values(EmailStatus),
      default: EmailStatus.Recevied,
    },
  },
  { collection: 'email' },
);

const Email = mongoose.model('Email', emailSchema);

export default Email;
