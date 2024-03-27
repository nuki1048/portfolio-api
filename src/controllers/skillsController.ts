import { Request, Response } from 'express';
import { Model } from 'mongoose';
import Skill, { ISkill } from '../models/skillsModel';
import * as handlerFactory from './handlerFactory';

export const getAllSkills = async (req: Request, res: Response) => {
  const skills = await Skill.find().select('-_id');

  res
    .status(200)
    .json({ status: 'success', length: skills.length, data: { skills } });
};

export const createNewSkill = handlerFactory.updateOneDocument(
  Skill as unknown as Model<unknown>,
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
