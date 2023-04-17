/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : index
 */

import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  port:
    process.env.NODE_ENV === 'development'
      ? (parseInt(process.env.CLIENT_PORT as string, 10) as number)
      : (parseInt(process.env.SERVER_PORT as string, 10) as number),
  mongoURI:
    process.env.NODE_ENV === 'development'
      ? (process.env.MONGODB_LOCAL_URL as string)
      : (process.env.MONGODB_PROD_URL as string),
};
