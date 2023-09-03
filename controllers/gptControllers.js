/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : gptControllers
 */

const { gptServices } = require("../services");
const { responseMessage, statusCode, handler } = require("../modules/util");

const sendGptChainController = async (req, res) => {
  const payload = req.body;
  console.log(payload)
  try {
    const data = await gptServices.sendGptChainService(payload);
    res
      .status(statusCode.CREATED)
      .json(handler.success(statusCode.CREATED, responseMessage.SUCCESS, data));
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

const sendGptRelationController = async (req, res) => {
  const payload = req.body;
  try {
    const data = await gptServices.sendGptRelationService(payload);
    res
      .status(statusCode.CREATED)
      .json(handler.success(statusCode.CREATED, responseMessage.SUCCESS, data));
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

const sendGptRecommendController = async (req, res) => {
  const payload = req.body;
  try {
    const data = await gptServices.sendGptRecommendService(payload);
    res
      .status(statusCode.CREATED)
      .json(util.success(statusCode.CREATED, responseMessage.SUCCESS, data));
  } catch (error) {
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

const sendGptSummaryController = async (req, res) => {
  const payload = req.body;
  try {
    const data = await gptServices.sendGptSummaryService(payload);
    res
      .status(statusCode.CREATED)
      .json(handler.success(statusCode.CREATED, responseMessage.SUCCESS, data));
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

const sendGptTestController = async (req, res) => {
  try {
    const data = await gptServices.sendGptTestService();
    res
      .status(statusCode.CREATED)
      .json(handler.success(statusCode.CREATED, responseMessage.SUCCESS, data));
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
  sendGptChainController,
  sendGptRelationController,
  sendGptRecommendController,
  sendGptSummaryController,
  sendGptTestController,
};
