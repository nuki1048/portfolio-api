import mongoose, { Schema } from 'mongoose';

export interface ISkill {
  name: string;
  icon?: string;
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
  },
  { collection: 'skills' },
);

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
