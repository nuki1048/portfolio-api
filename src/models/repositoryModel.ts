import mongoose, { Schema } from 'mongoose';

export interface IRepository {
  name: string;
  show: boolean;
}

const repositorySchema = new Schema<IRepository>(
  {
    name: {
      type: String,
      required: [true, 'Repository must have a name'],
      unique: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  { collection: 'blacklist' },
);

export const Repository = mongoose.model('Repository', repositorySchema);
