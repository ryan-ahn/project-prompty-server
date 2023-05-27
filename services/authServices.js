/**
 * Author : Ryan
 * Date : 2023-04-30
 * Desc : userServices
 */

const axios = require('axios');
const jwt = require('jsonwebtoken');
const config = require('../config');
const userModel = require('../models/userSchema');

const kakaoInitService = async () => {
  // Step0. Kakao Init
  const initUrl = 'https://kauth.kakao.com/oauth/authorize';
  const kakaoInitConfig = {
    client_id: config.kakaoRestKey,
    redirect_uri: `${config.originHost}/signin`,
    response_type: 'code',
  };
  const params = new URLSearchParams(kakaoInitConfig).toString();
  const redirectUrl = `${initUrl}?${params}`;
  return redirectUrl;
};

const kakaoCallbackService = async (code) => {
  // Step1. Kakao Callback
  const baseUrl = 'https://kauth.kakao.com/oauth/token';
  const kakaoCallbackConfig = {
    client_id: config.kakaoScriptKey,
    client_secret: '',
    grant_type: 'authorization_code',
    redirect_uri: `${config.originHost}/signin`,
    code: code,
  };
  const params = new URLSearchParams(kakaoCallbackConfig).toString();
  const callbackUrl = `${baseUrl}?${params}`;
  const callbackResponse = await axios.get(callbackUrl, {
    headers: {
      'Content-type': 'application/json',
    },
  });
  // Step2. Kakao Token
  const userUrl = 'https://kapi.kakao.com/v2/user/me';
  const callbackToken = callbackResponse.data.access_token;
  const userResponse = await axios.get(userUrl, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${callbackToken}`,
    },
  });
  // Step3. Search User Data
  const userDetail = await userModel.findOne({
    userId: userResponse.data.id,
  });
  let resultData = {
    userDetail: null,
    token: {
      accessToken: null,
    },
  };
  // Step4. JWT Token
  const id = userResponse.data.id;
  const nick = userResponse.data.properties.nickname;
  resultData.token.accessToken = jwt.sign(
    {
      id,
      nick,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '1y',
      issuer: 'prompty',
    }
  );
  // Step5. Sign Up or Sign In
  if (userDetail) {
    resultData.userDetail = userDetail;
  } else {
    const userData = new userModel({
      userId: userResponse.data.id,
      name: userResponse.data.properties.nickname,
      email: userResponse.data.kakao_account.email,
      phone: null,
      birth: null,
      profileImage: userResponse.data.properties.profile_image,
      company: null,
      introduce: null,
      createAt: new Date(),
      updateAt: new Date(),
      deleteAt: null,
      signinAt: null,
    });
    resultData.userDetail = userData;
    await userData.save();
  }
  // todo : delete user 에러처리 해야함
  return resultData;
};

const authTokenAccessService = async (req) => {
  const decode = jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET_KEY
  );
  const userDetail = await userModel.findOne({
    userId: decode.id,
  });
  const resultData = {
    userDetail: userDetail,
  };
  // todo : delete user 에러처리 해야함
  return resultData;
};

const authTokenVerifyService = (req) => {
  req.decoded = jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET_KEY
  );
};

module.exports = {
  kakaoInitService,
  kakaoCallbackService,
  authTokenAccessService,
  authTokenVerifyService,
};
