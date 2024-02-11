import { Request, Response } from 'express';
import Skill, { ISkill } from '../models/skillsModel';

export const getAllSkills = async (req: Request, res: Response) => {
  const skills = await Skill.find();

  res
    .status(200)
    .json({ status: 'success', length: skills.length, data: { skills } });
};

export const createNewSkill = async (
  req: Request<object, object, ISkill>,
  res: Response,
) => {
  const skill = await Skill.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      skill,
    },
  });
};
