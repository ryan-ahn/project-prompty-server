/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : gptControllers
 */

import { Request, Response } from 'express';
import { gptServices } from '../services';
import { responseMessage, statusCode, util } from '../modules';
import { ISendGptReq } from '../interfaces/gptInterfaces';

const sendGptController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const sendGpt: any = req.body;
  try {
    const data = await gptServices.sendGptService(sendGpt);
    res
      .status(statusCode.CREATED)
      .send(util.success(statusCode.CREATED, responseMessage.SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default {
  sendGptController,
};
