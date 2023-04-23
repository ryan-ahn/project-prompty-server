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
const sendGptRecommendService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = [
        {
            role: 'system',
            content: '당신은 내 질문에 답변해주는 도우미입니다.',
        },
        {
            role: 'user',
            content: `친구에게 지식과 관련된 질문을 해보려고 해요. ${payload.input}와 관련 있는 질문 세가지만 알려주세요. 질문 이외에 다른 말은 하지 말아주세요. 각각의 질문은 개행문자로 줄바꿈 처리 해주세요`,
        },
    ];
    try {
        const response = yield axios_1.default.post(`https://api.openai.com/v1/chat/completions`, {
            model: 'gpt-3.5-turbo',
            messages: messages,
            temperature: 0.5,
        }, {
            headers: {
                Authorization: `Bearer ${process.env.GPT_SECRET_KEY}`,
            },
        });
        const result = response.data.choices[0].message.content;
        return result;
    }
    catch (error) {
        const typeError = error;
        console.log(typeError.response.data);
        throw error;
    }
});
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
        content: `${payload.input}. 에 대해 답변해주세요. 답변 외에 다른말은 하지 말아주세요. 답변에서 중요한 단어나 생소한 단어들이 있는 경우에는 해당 단어들을 각각 <em></em>태그 안에 넣어주세요. `,
    });
    try {
        const response = yield axios_1.default.post(`https://api.openai.com/v1/chat/completions`, {
            model: 'gpt-3.5-turbo',
            messages: messages,
            temperature: 0.5,
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
        const typeError = error;
        console.log(typeError.response.data);
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
        content: `해당 내용에 관련된 추가 질문을 하려고 해요. "${payload.input}"라는 질문 또는 요청과 관련 있는 주제 세 가지를 보여주세요. 질문 형태로 말해주시고 다른 말과 추가 대답은 하지 말아주세요. 각각의 질문은 개행문자로 줄바꿈 처리 해주세요.`,
    });
    try {
        const response = yield axios_1.default.post(`https://api.openai.com/v1/chat/completions`, {
            model: 'gpt-3.5-turbo',
            messages: messages,
            temperature: 0.3,
        }, {
            headers: {
                Authorization: `Bearer ${process.env.GPT_SECRET_KEY}`,
            },
        });
        const result = response.data.choices[0].message.content;
        return result;
    }
    catch (error) {
        const typeError = error;
        console.log(typeError.response.data);
        throw error;
    }
});
exports.default = {
    sendGptRecommendService,
    sendGptChainService,
    sendGptRelationService,
};
