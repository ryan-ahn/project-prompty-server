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
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(
        handler.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  }
};

const readPromptByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await promptServices.readPromptByIdService(id);
    res.status(statusCode.CREATED);
    res.json(
      handler.success(statusCode.OK, responseMessage.READ_SUCCESS, data)
    );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(
        handler.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.INTERNAL_SERVER_ERROR
        )
      );
  }
};

module.exports = {
  createPromptController,
  readPromptByIdController,
};
