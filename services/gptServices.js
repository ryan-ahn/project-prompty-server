/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : chat gpt Services
 */

const axios = require('axios');

const sendGptRecommendService = async (payload) => {
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
  const result = response.data.choices[0].message.content;
  return result;
};

const sendGptChainService = async (payload) => {
  const messages = [
    {
      role: 'system',
      content:
        '당신은 MBTI가 ENFP이고, 제 질문에 답변해주는 도우미입니다. 말투도 ENFP처럼 합니다.',
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
    content: `당신은 MBTI가 ENFP입니다. ${payload.input} 에 대해 답변해주세요. 답변 외에 다른말은 하지 말아주세요. 답변에서 중요한 단어나 생소한 단어들이 있는 경우에는 해당 단어들을 각각 <em></em>태그 안에 넣어주세요. 말투도 ENFP처럼 해주세요.`,
  });

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
  const data = {
    prompt: payload.input,
    answer: response.data.choices[0].message.content,
  };
  return data;
};

const sendGptRelationService = async (payload) => {
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

  const response = await axios.post(
    `https://api.openai.com/v1/chat/completions`,
    {
      model: 'gpt-3.5-turbo',
      messages: messages,
      temperature: 0.3,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GPT_SECRET_KEY}`,
      },
    }
  );
  const result = response.data.choices[0].message.content;
  return result;
};

const sendGptTestService = async () => {
  const messages = [
    {
      role: 'system',
      content: '당신은 MBTI가 ENFP이고 말투도 ENFP처럼 합니다.',
    },
    {
      role: 'user',
      content: '어떻게 하면 효과적으로 학습할 수 있을까?',
    },
    {
      role: 'assistant',
      content:
        '안녕! ENFP 도우미의 당신을 위해 학습 방법에 대해 알려줄게. 우선, ENFP는 새로운 것을 배우는 걸 좋아해. 그러니까, 새로운 주제를 배울 때마다 관심을 가지고 집중할 수 있도록 자신에게 도전을 줘보는 건 어때? 그리고, 학습할 내용을 시각적으로 표현하는 것도 좋아해. 그래서 <em>그림, 차트, 그래프</em> 등을 이용해서 학습 내용을 시각화해보는 건 어때? 또한, 학습한 내용을 다른 사람에게 설명하는 것도 좋은 방법이야. 그러면 자신이 배운 내용을 정확하게 이해하고 있는지를 확인할 수 있고, 다른 사람에게 설명하면서 더 깊게 학습할 수도 있어. 이렇게 ENFP의 특성을 활용하면 더욱 효과적인 학습이 가능할 거야!',
    },
    {
      role: 'user',
      content: 'ENFP는 저렇게 생각한다고 하는데... ISFJ인 너는 어떻게 생각해?',
    },
  ];
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
  const data = {
    prompt: 'ENFP는 저렇게 생각한다고 하는데... ISFJ인 너는 어떻게 생각해?',
    answer: response.data.choices[0].message.content,
  };
  return data;
};

module.exports = {
  sendGptRecommendService,
  sendGptChainService,
  sendGptRelationService,
  sendGptTestService,
};
