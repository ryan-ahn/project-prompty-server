/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : chat gpt Services
 */

import axios from 'axios';
import {
  ISendGptReq,
  ISendGptRes,
  IMessageRole,
} from '../interfaces/gptInterfaces';

const sendGptService = async (payload: ISendGptReq): Promise<ISendGptRes> => {
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
    const result: ISendGptRes = {
      prompt: payload.input,
      answer: response.data.choices[0].message.content,
    };
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  sendGptService,
};
