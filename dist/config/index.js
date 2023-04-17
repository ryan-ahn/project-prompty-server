"use strict";
/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : index
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const envFound = dotenv_1.default.config();
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
exports.default = {
    port: process.env.PORT,
    mongoURI: process.env.NODE_ENV === 'production'
        ? process.env.MONGODB_PROD_URL
        : process.env.MONGODB_DEV_URL,
};
