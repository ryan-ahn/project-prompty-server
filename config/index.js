/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : index
 */

const dotenv = require('dotenv');

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

const port = process.env.PORT;

const apiHost =
  process.env.NODE_ENV === 'development'
    ? process.env.API_DEV_URL
    : process.env.API_PROD_URL;

const originHost =
  process.env.NODE_ENV === 'development'
    ? process.env.ORIGIN_DEV_URL
    : process.env.ORIGIN_PROD_URL;

const mongoURI =
  process.env.NODE_ENV === 'development'
    ? process.env.MONGODB_DEV_URL
    : process.env.MONGODB_PROD_URL;

const kakaoScriptKey =
  process.env.NODE_ENV === 'development'
    ? process.env.KAKAO_PROD_SCRIPT_KEY
    : process.env.KAKAO_PROD_SCRIPT_KEY;

const kakaoRestKey =
  process.env.NODE_ENV === 'development'
    ? process.env.KAKAO_PROD_SCRIPT_KEY
    : process.env.KAKAO_PROD_REST_KEY;

module.exports = {
  port,
  apiHost,
  mongoURI,
  originHost,
  kakaoScriptKey,
  kakaoRestKey,
};
