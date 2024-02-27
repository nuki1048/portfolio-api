import mongoose, { Schema } from 'mongoose';

export interface IReview {
  review: string;
  rating: number;
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
  },
  { collection: 'reviews' },
);

const Review = mongoose.model('Review', reviewSchema);

export default Review;
