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
const sendGptChainService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
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
        const data = {
            prompt: payload.input,
            answer: response.data.choices[0].message.content,
        };
        return data;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
const sendGptRelationService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
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
        content: `"${payload.input}"라는 질문 또는 요청과 관련 있는 주제 세 가지를 보여주세요. 질문 형태로 말해주시고 다른 말은 하지 말아주세요. 각각의 질문은 개행문자로 줄바꿈 처리 해주세요.`,
    });
    try {
        const response = yield axios_1.default.post(`https://api.openai.com/v1/chat/completions`, {
            model: 'gpt-3.5-turbo',
            messages: messages,
            temperature: 0.1,
        }, {
            headers: {
                Authorization: `Bearer ${process.env.GPT_SECRET_KEY}`,
            },
        });
        const result = response.data.choices[0].message.content;
        return result;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.default = {
    sendGptChainService,
    sendGptRelationService,
};
