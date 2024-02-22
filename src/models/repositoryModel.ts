/* eslint-disable @typescript-eslint/indent */
import mongoose, { Model, Schema } from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies, node/no-missing-import
import { OctokitResponse } from '@octokit/types';
import { Repos } from '../types/types';

export interface RepositoryInterface {
  name: string;
  show: boolean;
}
export interface RepositoryMethods {}

export interface IRepository
  extends Model<RepositoryInterface, object, RepositoryMethods> {
  filterRepos: (
    repos: OctokitResponse<Repos[], 200>,
    blacklist: RepositoryInterface[],
  ) => Repos[];
}

const repositorySchema = new Schema<
  RepositoryInterface,
  IRepository,
  RepositoryMethods
>(
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

repositorySchema.static(
  'filterRepos',
  (repos: OctokitResponse<Repos[], 200>, blacklist: RepositoryInterface[]) =>
    repos.data.filter((repo) =>
      blacklist.some((black) => black.name === repo.name && black.show),
    ),
);

export const Repository = mongoose.model<RepositoryInterface, IRepository>(
  'Repository',
  repositorySchema,
);
