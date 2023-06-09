/**
 * Author : Ryan
 * Date : 2023-04-17
 * Desc : prompt service
 */

const promptModel = require("../models/promptSchema");

const createPromptService = async (payload) => {
  const post = new promptModel({
    promptList: payload.promptList,
    category: payload.category,
    createAt: new Date(),
    modifyAt: new Date(),
  });
  await post.save();
  const data = {
    _id: post.id,
  };
  return data;
};

const readPromptByIdService = async (id) => {
  const prompt = await promptModel.findOne({ _id: id });
  if (!prompt) {
    return null;
  }
  return prompt;
};

module.exports = {
  createPromptService,
  readPromptByIdService,
};
