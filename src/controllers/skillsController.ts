import { Request, Response } from 'express';
import Skill, { ISkill } from '../models/skillsModel';
import { catchAsync } from '../utils/catchAsync';

export const getAllSkills = async (req: Request, res: Response) => {
  const skills = await Skill.find().select('-_id');

  res
    .status(200)
    .json({ status: 'success', length: skills.length, data: { skills } });
};

export const createNewSkill = catchAsync(
  async (req: Request<object, object, ISkill>, res: Response) => {
    const skill = await Skill.create({
      name: req.body.name,
      slug: req.body.slug,
      icon: req.file.path,
    });

    res.status(200).json({
      status: 'success',
      data: { skill },
    });
  },
);
export const deleteSkill = async (
  req: Request<{ slug: string }>,
  res: Response,
) => {
  const { slug } = req.params;

  await Skill.findOneAndDelete({ slug });

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

export const updateSkill = async (
  req: Request<{ slug: string }, object, Partial<ISkill>>,
  res: Response,
) => {
  const { slug } = req.params;
  const { icon, name } = req.body;

  const skill = await Skill.findOne({ slug }, {}, { returnOriginal: false });

  skill.name = name ?? skill.name;
  skill.icon = icon ?? skill.icon;

  skill.save();

  res.status(200).json({
    status: 'success',
    data: {
      skill,
    },
  });
};
