/**
 * Author : Ryan
 * Date : 2023-04-16
 * Desc : prompt
 */

import { Request, Response } from 'express';
import { responseMessage, statusCode, util } from '../modules';
import { promptServices } from '../services';
import { IPromptCreateDto } from '../interfaces/promptInterfaces';

const createPromptController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const postCreateDto: IPromptCreateDto = req.body;
  try {
    const data = await promptServices.createPromptService(postCreateDto);
    res
      .status(statusCode.CREATED)
      .send(
        util.success(
          statusCode.CREATED,
          responseMessage.CREATE_POST_SUCCESS,
          data
        )
      );
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

const readPromptByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const data = await promptServices.readPromptByIdService(id);
    res.status(statusCode.CREATED);
    res.send(
      util.success(statusCode.OK, responseMessage.READ_POST_SUCCESS, data)
    );
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
  createPromptController,
  readPromptByIdController,
};
