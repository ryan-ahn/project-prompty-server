/**
 * Author : Ryan
 * Date : 2023-04-17
 * Desc : prompt service
 */

const promptModel = require('../models/promptSchema');

const createPromptService = async (payload) => {
  try {
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
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const readPromptByIdService = async (id) => {
  try {
    const prompt = await promptModel.findOne({ _id: id });
    if (!prompt) {
      return null;
    }
    return prompt;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createPromptService,
  readPromptByIdService,
};
