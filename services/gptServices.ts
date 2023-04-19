/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : chat gpt Services
 */

import axios from 'axios';
import {
  IMessageRole,
  ISendGptChainReq,
  ISendGptChainRes,
  ISendGptRelationReq,
  ISendGptRelationRes,
} from '../interfaces/gptInterfaces';
import { SystemError } from '../interfaces/system';

const sendGptChainService = async (
  payload: ISendGptChainReq
): Promise<ISendGptChainRes> => {
  const messages: Array<IMessageRole> = [
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
    const response = await axios.post(
      `https://api.openai.com/v1/chat/completions`,
      {
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GPT_SECRET_KEY}`,
        },
      }
    );
    const data: ISendGptChainRes = {
      prompt: payload.input,
      answer: response.data.choices[0].message.content,
    };
    return data;
  } catch (error) {
    const typeError = error as SystemError;
    console.log(typeError.response.data);
    throw error;
  }
};

const sendGptRelationService = async (
  payload: ISendGptRelationReq
): Promise<ISendGptRelationRes> => {
  const messages: Array<IMessageRole> = [
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
    content: `해당 내용에 관련된 추가 질문을 하려고 해요. "${payload.input}"라는 질문 또는 요청과 관련 있는 주제 세 가지를 보여주세요. 질문 형태로 말해주시고 다른 말은 하지 말아주세요. 각각의 질문은 개행문자로 줄바꿈 처리 해주세요.`,
  });
  try {
    const response = await axios.post(
      `https://api.openai.com/v1/chat/completions`,
      {
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0.1,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GPT_SECRET_KEY}`,
        },
      }
    );
    const result: ISendGptRelationRes =
      response.data.choices[0].message.content;
    return result;
  } catch (error) {
    const typeError = error as SystemError;
    console.log(typeError.response.data);
    throw error;
  }
};

const sendGptRecommendService = async (): Promise<ISendGptRelationRes> => {
  const messages: Array<IMessageRole> = [
    {
      role: 'system',
      content: '당신은 내 질문에 답변해주는 도우미입니다.',
    },
    {
      role: 'user',
      content: `친구에게 신박한 질문을 해보려고 해요. 신박한 질문 세가지만 알려주세요. 질문 이외에 다른 말은 하지 말아주세요. 각각의 질문은 개행문자로 줄바꿈 처리 해주세요`,
    },
  ];
  try {
    const response = await axios.post(
      `https://api.openai.com/v1/chat/completions`,
      {
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0.5,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GPT_SECRET_KEY}`,
        },
      }
    );
    const result: ISendGptRelationRes =
      response.data.choices[0].message.content;
    return result;
  } catch (error) {
    const typeError = error as SystemError;
    console.log(typeError.response.data);
    throw error;
  }
};

export default {
  sendGptChainService,
  sendGptRelationService,
  sendGptRecommendService,
};
