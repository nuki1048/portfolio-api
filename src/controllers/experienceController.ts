/* eslint-disable @typescript-eslint/indent */
import { Request, Response } from 'express';
import Experience, { IExperience } from '../models/experienceModel';

export const getAllExperience = async (req: Request, res: Response) => {
  const experience = await Experience.find();

  res.status(200).json({
    status: 'success',
    data: {
      experience,
    },
  });
};

export const createNewExperience = async (
  req: Request<object, object, IExperience>,
  res: Response,
) => {
  const newExperience = await Experience.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      experience: newExperience,
    },
  });
};

export const updateExperience = async (
  req: Request<{ id: string }, object, Partial<IExperience>>,
  res: Response,
) => {
  const experience = await Experience.findByIdAndUpdate(
    req.params.id,
    req.body,
    { runValidators: true, returnOriginal: false },
  );

  res.status(200).json({ status: 'success', data: { experience } });
};

export const deleteExperience = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  await Experience.findByIdAndDelete(req.params.id);

  res.status(204).json({ status: 'success', data: null });
};
