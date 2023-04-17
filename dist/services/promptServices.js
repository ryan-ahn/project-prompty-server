"use strict";
/**
 * Author : Ryan
 * Date : 2023-04-17
 * Desc : prompt service
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promptSchema_1 = __importDefault(require("../models/promptSchema"));
const createPromptService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = new promptSchema_1.default({
            promptList: payload.promptList,
            category: payload.category,
            createAt: new Date(),
            modifyAt: new Date(),
        });
        yield post.save();
        const data = {
            _id: post.id,
        };
        return data;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
const readPromptByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const prompt = yield promptSchema_1.default.findOne({ _id: id });
        if (!prompt) {
            return null;
        }
        return prompt;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.default = {
    createPromptService,
    readPromptByIdService,
};
