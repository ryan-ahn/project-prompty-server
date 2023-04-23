/**
 * Author : Ryan
 * Date : 2023-04-16
 * Desc : prompt
 */

import { Request, Response } from 'express';
import { promptServices } from '../services';
import { responseMessage, statusCode, util } from '../modules';
import { IPromptCreateDto } from '../interfaces/promptInterfaces';

const createPromptController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const payload: IPromptCreateDto = req.body;
  try {
    const data = await promptServices.createPromptService(payload);
    res
      .status(statusCode.CREATED)
      .json(
        util.success(statusCode.CREATED, responseMessage.CREATE_SUCCESS, data)
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const readPromptByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const data = await promptServices.readPromptByIdService(id);
    res.status(statusCode.CREATED);
    res.json(util.success(statusCode.OK, responseMessage.READ_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  }
};

export default {
  createPromptController,
  readPromptByIdController,
};
