/**
 * Author : Ryan
 * Date : 2023-04-16
 * Desc : prompt
 */

const { promptServices } = require('../services');
const { responseMessage, statusCode, handler } = require('../modules/util');

const createPromptController = async (req, res) => {
  const payload = req.body;
  try {
    const data = await promptServices.createPromptService(payload);
    res
      .status(statusCode.CREATED)
      .json(
        handler.success(
          statusCode.CREATED,
          responseMessage.CREATE_SUCCESS,
          data
        )
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.BAD_REQUEST)
      .json(handler.fail(statusCode.BAD_REQUEST, responseMessage.BAD_REQUEST));
  }
};

const readPromptByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await promptServices.readPromptByIdService(id);
    res.status(statusCode.OK);
    res.json(
      handler.success(statusCode.OK, responseMessage.READ_SUCCESS, data)
    );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.BAD_REQUEST)
      .json(handler.fail(statusCode.BAD_REQUEST, responseMessage.BAD_REQUEST));
  }
};

module.exports = {
  createPromptController,
  readPromptByIdController,
};
