"use strict";
/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : controllers
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gptControllers = exports.promptControllers = void 0;
const promptControllers_1 = __importDefault(require("./promptControllers"));
exports.promptControllers = promptControllers_1.default;
const gptControllers_1 = __importDefault(require("./gptControllers"));
exports.gptControllers = gptControllers_1.default;
