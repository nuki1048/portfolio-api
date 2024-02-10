import { Request, Response } from 'express';
import Skill from '../models/skillsModel';

// TODO: Delete this rule when next time update it
// eslint-disable-next-line import/prefer-default-export
export const getAllSkills = async (req: Request, res: Response) => {
  const skills = await Skill.find();

  res
    .status(200)
    .json({ status: 'success', length: skills.length, data: { skills } });
};
