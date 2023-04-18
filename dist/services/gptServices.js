"use strict";
/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : chat gpt Services
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
const axios_1 = __importDefault(require("axios"));
const sendGptService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = [
        {
            role: 'system',
            content: '당신은 내 질문에 답변해주는 도우미입니다.',
        },
    ];
    if (payload.assistant && payload.assistant.length > 0) {
        for (let i = 0; i < payload.assistant.length; i++) {
            messages.push({ role: 'user', content: payload.assistant[i].prompt });
            messages.push({
                role: 'assistant',
                content: payload.assistant[i].answer,
            });
        }
    }
    messages.push({
        role: 'user',
        content: `${payload.input}`,
    });
    try {
        const response = yield axios_1.default.post(`https://api.openai.com/v1/chat/completions`, {
            model: 'gpt-3.5-turbo',
            messages: messages,
            temperature: 0.7,
        }, {
            headers: {
                Authorization: `Bearer ${process.env.GPT_SECRET_KEY}`,
            },
        });
        const result = {
            prompt: payload.input,
            answer: response.data.choices[0].message.content,
        };
        return result;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.default = {
    sendGptService,
};
