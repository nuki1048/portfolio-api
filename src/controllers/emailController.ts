import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

import { Model } from 'mongoose';
import data from '../assets/email-template.json';
import Email, { IEmail } from '../models/emailModel';
import { EMAIL_CONFIG } from '../utils/emailUtils';
import * as handlerFactory from './handlerFactory';

const EMAIL_TEMPLATE = JSON.parse(JSON.stringify(data));

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

export const getAllEmails = handlerFactory.getAllDocuments(
  Email as unknown as Model<unknown>,
);

export const getEmail = handlerFactory.getOneDocument(
  Email as unknown as Model<unknown>,
);

export const updateEmail = handlerFactory.updateOneDocument(
  Email as unknown as Model<unknown>,
);

export const deleteEmail = handlerFactory.deleteOneDocument(
  Email as unknown as Model<unknown>,
);
