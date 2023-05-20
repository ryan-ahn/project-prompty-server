/**
 * Author : Ryan
 * Date : 2023-04-30
 * Desc : userControllers
 */

const { authServices } = require('../services');
const { responseMessage, statusCode, handler } = require('../modules/util');

const kakaoInitController = async (_, res) => {
  try {
    const serviceResponse = await authServices.kakaoInitService();
    return res.redirect(serviceResponse);
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.BAD_REQUEST)
      .json(handler.fail(statusCode.BAD_REQUEST, responseMessage.BAD_REQUEST));
  }
};

const kakaoCallbackController = async (req, res) => {
  const { id } = req.params;
  try {
    const serviceResponse = await authServices.kakaoCallbackService(id);
    res
      .status(statusCode.OK)
      .json(
        handler.success(statusCode.OK, responseMessage.SUCCESS, serviceResponse)
      );
  } catch (error) {
    console.log(error);
    res
      .status(statusCode.BAD_REQUEST)
      .json(handler.fail(statusCode.BAD_REQUEST, responseMessage.BAD_REQUEST));
  }
};

const authTokenAccessController = async (req, res) => {
  try {
    const serviceResponse = await authServices.authTokenAccessService(req);
    res
      .status(statusCode.OK)
      .json(
        handler.success(statusCode.OK, responseMessage.SUCCESS, serviceResponse)
      );
  } catch (error) {
    console.log(error);
    if (error.name === 'TokenExpiredError') {
      res
        .status(statusCode.TOKEN_EXPIRATION)
        .json(
          handler.fail(
            statusCode.TOKEN_EXPIRATION,
            responseMessage.TOKEN_EXPIRATION
          )
        );
    }
    res
      .status(statusCode.UNAUTHORIZED)
      .json(
        handler.fail(statusCode.UNAUTHORIZED, responseMessage.INVALIDE_TOKEN)
      );
  }
};

const authTokenVerifyController = (req, res) => {
  try {
    authServices.authTokenVerifyService(req);
    res
      .status(statusCode.OK)
      .json(handler.success(statusCode.OK, responseMessage.SUCCESS));
  } catch (error) {
    console.log(error);
    if (error.name === 'TokenExpiredError') {
      res
        .status(statusCode.TOKEN_EXPIRATION)
        .json(
          handler.fail(
            statusCode.TOKEN_EXPIRATION,
            responseMessage.TOKEN_EXPIRATION
          )
        );
    }
    res
      .status(statusCode.UNAUTHORIZED)
      .json(
        handler.fail(statusCode.UNAUTHORIZED, responseMessage.INVALIDE_TOKEN)
      );
  }
};

module.exports = {
  kakaoInitController,
  kakaoCallbackController,
  authTokenAccessController,
  authTokenVerifyController,
};
