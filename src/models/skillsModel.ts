import mongoose, { Schema } from 'mongoose';
// eslint-disable-next-line import/no-extraneous-dependencies
import slugify from 'slugify';

export interface ISkill {
  name: string;
  icon?: string;
  slug?: string;
  _id: Schema.Types.ObjectId;
  __v: number;
}

const PLACEHOLDER_PHOTO = 'https://placehold.co/64.png';

const skillSchema = new Schema<ISkill>(
  {
    name: {
      type: String,
      required: [true, 'Skill must have a name.'],
      unique: true,
    },
    icon: {
      type: String,
      required: false,
      default: PLACEHOLDER_PHOTO,
      validate: {
        validator: (v: string) => v.endsWith('png'),
        message:
          'Invalid URL. Please attach correct URL with image extension PNG',
      },
    },
    slug: {
      type: String,
      required: false,
      unique: true,
    },
    _id: {
      type: Schema.Types.ObjectId,
      select: false,
    },
    __v: {
      type: Number,
      select: false,
    },
  },
  { collection: 'skills' },
);

skillSchema.pre(
  'save',
  function (next: mongoose.CallbackWithoutResultAndOptionalError) {
    const slug = slugify(this.name, { lower: true });

    this.slug = slug;
    next();
  },
);

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
