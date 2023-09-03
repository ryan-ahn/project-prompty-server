/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : chat gpt Services
 */

const SYSTEM = [
  {content: "당신은 MBTI가 ENFP이며 감탄사를 많이 사용하고 리액션이 좋으며 공감을 잘 해주며 무조건 내 말에 동의해주는 마음이 따뜻한 친구입니다."}, 
  {content: "당신은 여행을 좋아하고 여행과 관련된 방식으로 대화를 풀어가며 그와 무관한 주제에는 여행외에는 잘 모른다고 답변합니다."}, 
  {content: "당신은 강아지입니다. 말투는 상황에 따라 항상 왈, 왈왈, 으르렁 등이 많이 붙습니다. 종은 리트리버이며 항상 말을 짧게 대답하고 반말로 대답하며 아는 단어가 없습니다. 간식을 좋아하고 모르는 말은 간식인지 되묻습니다."}
]

const PROMPT = [
  {user: '에 대해 어떻게 생각해? 말을 할때 중요한 단어나 생소한 단어들이 있는 경우에는 해당 단어들을 각각 <em></em>태그 안에 넣어주시고 이말에 대해 대답하지 마세요.'},
  {user: '에 대해 어떻게 생각해? 말을 할때 중요한 단어나 생소한 단어들이 있는 경우에는 해당 단어들을 각각 <em></em>태그 안에 넣어주시고 이말에 대해 대답하지 마세요.'},
  {user: '에 대해 알고있어?'}
]

const axios = require("axios");

const sendGptChainService = async (payload) => {
  const messages = [
    {
      role: "system",
      content: SYSTEM[payload.character].content,
    },
  ];
  if (payload.assistant && payload.assistant.length > 0) {
    for (let i = 0; i < payload.assistant.length; i++) {
      messages.push({ role: "user", content: payload.assistant[i].prompt });
      messages.push({
        role: "assistant",
        content: payload.assistant[i].answer,
      });
    }
  }
  messages.push({
    role: "user",
    content: `${payload.input}. ${PROMPT[payload.character].user}`,
  });

  const response = await axios.post(
    `https://api.openai.com/v1/chat/completions`,
    {
      model: "gpt-3.5-turbo",
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
      role: "system",
      content: "당신은 내 질문에 답변해주는 도우미입니다.",
    },
  ];
  if (payload.assistant && payload.assistant.length > 0) {
    for (let i = 0; i < payload.assistant.length; i++) {
      messages.push({ role: "user", content: payload.assistant[i].prompt });
      messages.push({
        role: "assistant",
        content: payload.assistant[i].answer,
      });
    }
  }
  messages.push({
    role: "user",
    content: `해당 내용에 관련된 추가 질문을 하려고 해요. "${payload.input}"라는 질문 또는 요청과 관련 있는 주제 세 가지를 보여주세요. 질문 형태로 말해주시고 다른 말과 추가 대답은 하지 말아주세요. 각각의 질문은 개행문자로 줄바꿈 처리 해주세요.`,
  });

  const response = await axios.post(
    `https://api.openai.com/v1/chat/completions`,
    {
      model: "gpt-3.5-turbo",
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

const sendGptSummaryService = async (payload) => {
  const messages = [
    {
      role: "system",
      content: "당신은 나와 당신이 대화한 문맥을 요약해주는 도우미입니다.",
    },
  ];
  if (payload.assistant && payload.assistant.length > 0) {
    for (let i = 0; i < payload.assistant.length; i++) {
      messages.push({ role: "user", content: payload.assistant[i].prompt });
      messages.push({
        role: "assistant",
        content: payload.assistant[i].answer,
      });
    }
  }
  messages.push({
    role: "user",
    content: `위의 모든 내용을 요약 하려고 해요. 위의 질문과 답변을 한 페이지로 요약해주시고 개행문자로 줄바꿈 처리 해주세요.`,
  });

  const response = await axios.post(
    `https://api.openai.com/v1/chat/completions`,
    {
      model: "gpt-3.5-turbo",
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


const sendGptRecommendService = async (payload) => {
  const messages = [
    {
      role: "system",
      content: '내 말에 답변을 해주는 도우미',
    },
    {
      role: "user",
      content: `친구에게 지식과 관련된 질문을 해보려고 해요. ${payload.input}와 관련 있는 질문 세가지만 알려주세요. 질문 이외에 다른 말은 하지 말아주세요. 각각의 질문은 개행문자로 줄바꿈 처리 해주세요`,
    },
  ];
  const response = await axios.post(
    `https://api.openai.com/v1/chat/completions`,
    {
      model: "gpt-3.5-turbo",
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


const sendGptTestService = async () => {};

module.exports = {
  sendGptRecommendService,
  sendGptChainService,
  sendGptRelationService,
  sendGptSummaryService,
  sendGptTestService,
};
