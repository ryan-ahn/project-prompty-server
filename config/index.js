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
  port: parseInt(process.env.PORT),
  mongoURI: process.env.MONGODB_URL,
};
