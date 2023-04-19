/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : gptControllers
 */

import { Request, Response } from 'express';
import { gptServices } from '../services';
import { responseMessage, statusCode, util } from '../modules';
import {
  ISendGptChainReq,
  ISendGptRelationReq,
} from '../interfaces/gptInterfaces';

const sendGptChainController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const payload: ISendGptChainReq = req.body;
  try {
    const data = await gptServices.sendGptChainService(payload);
    res
      .status(statusCode.CREATED)
      .send(util.success(statusCode.CREATED, responseMessage.SUCCESS, data));
  } catch (error) {
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

const sendGptRelationController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const payload: ISendGptRelationReq = req.body;
  try {
    const data = await gptServices.sendGptRelationService(payload);
    res
      .status(statusCode.CREATED)
      .send(util.success(statusCode.CREATED, responseMessage.SUCCESS, data));
  } catch (error) {
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

const sendGptRecommendController = async (res: Response): Promise<void> => {
  try {
    const data = await gptServices.sendGptRecommendService();
    res
      .status(statusCode.CREATED)
      .send(util.success(statusCode.CREATED, responseMessage.SUCCESS, data));
  } catch (error) {
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
  sendGptChainController,
  sendGptRelationController,
  sendGptRecommendController,
};
