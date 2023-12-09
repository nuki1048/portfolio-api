import mongoose, { Schema } from 'mongoose';

export interface IRepository {
  name: string;
}

const repositorySchema = new Schema<IRepository>(
  {
    name: {
      type: String,
      required: [true, 'Repository must have a name'],
      unique: true,
    },
  },
  { collection: 'blacklist' },
);

export const Repository = mongoose.model('Repository', repositorySchema);
