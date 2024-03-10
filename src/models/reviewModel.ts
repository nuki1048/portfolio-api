import mongoose, {
  CallbackWithoutResultAndOptionalError,
  Schema,
} from 'mongoose';

export enum StatusReview {
  InProgress = 'in_progress',
  Accepted = 'accepted',
  Denied = 'denied',
}

export interface IReview {
  review: string;
  rating: number;
  status: StatusReview;
}

const reviewSchema = new Schema<IReview>(
  {
    review: {
      type: String,
      required: [true, 'Review must have a text!'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'Review must have a rating!'],
    },
    status: {
      type: String,
      enum: StatusReview,
    },
  },
  { collection: 'reviews' },
);

reviewSchema.pre(
  'find',
  function (next: CallbackWithoutResultAndOptionalError) {
    this.find({ status: 'accepted' });
    next();
  },
);
const Review = mongoose.model('Review', reviewSchema);

export default Review;
