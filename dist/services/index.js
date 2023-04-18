"use strict";
/**
 * Author : Ryan
 * Date : 2023-04-17
 * Desc : services
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gptServices = exports.promptServices = void 0;
const promptServices_1 = __importDefault(require("./promptServices"));
exports.promptServices = promptServices_1.default;
const gptServices_1 = __importDefault(require("./gptServices"));
exports.gptServices = gptServices_1.default;
