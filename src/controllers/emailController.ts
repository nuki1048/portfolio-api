import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

import data from '../assets/email-template.json';
import Email, { IEmail } from '../models/emailModel';
import { EMAIL_CONFIG } from '../utils/emailUtils';

const EMAIL_TEMPLATE = JSON.parse(JSON.stringify(data));

interface EmailParams {
  id: string;
}

// eslint-disable-next-line import/prefer-default-export
export const createEmail = async (
  req: Request<object, object, IEmail>,
  res: Response,
) => {
  const databaseItem = await Email.create(req.body);

  const transporter = nodemailer.createTransport(EMAIL_CONFIG);

  const message = {
    from: EMAIL_TEMPLATE.response.from,
    to: req.body.email,
    subject: EMAIL_TEMPLATE.response.subject,
    html: EMAIL_TEMPLATE.response.html,
  };

  try {
    const info = await transporter.sendMail(message);

    res.status(201).json({
      status: 'success',
      data: {
        info: {
          id: databaseItem.id,
          accepted: info.accepted,
        },
      },
    });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error });
  }
};

export const getAllEmails = async (req: Request, res: Response) => {
  try {
    const emails = await Email.find();

    res.status(200).json({
      status: 'success',
      data: {
        emails,
      },
    });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error });
  }
};

export const getEmail = async (req: Request<EmailParams>, res: Response) => {
  const { id } = req.params;

  try {
    const email = await Email.findById(id);

    res.status(200).json({
      status: 'success',
      data: {
        email,
      },
    });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error });
  }
};

export const updateEmail = async (
  req: Request<EmailParams, object, IEmail>,
  res: Response,
) => {
  const { id } = req.params;

  try {
    const email = await Email.findByIdAndUpdate(id, req.body);

    res.status(200).json({
      status: 'success',
      data: {
        email,
      },
    });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error });
  }
};

export const deleteEmail = async (req: Request<EmailParams>, res: Response) => {
  const { id } = req.params;

  try {
    await Email.findByIdAndDelete(id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(500).json({ status: 'fail', message: error });
  }
};
