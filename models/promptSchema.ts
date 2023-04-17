/**
 * Author : Ryan
 * Date : 2023-04-17
 * Desc : prompt models
 */

import mongoose from 'mongoose';
import { IPromptInfo } from '../interfaces/promptInterfaces';

const promptSchema = new mongoose.Schema(
  {
    promptList: {
      type: Array<{ prompt: String; answer: String }>,
      required: true,
    },
    category: {
      type: Number,
      required: true,
    },
    author: {
      type: String,
      required: false,
    },
    createAt: {
      type: Date,
      required: false,
    },
    modifyAt: {
      type: Date,
      required: false,
    },
  },
  { versionKey: false }
);

export default mongoose.model<IPromptInfo & mongoose.Document>(
  'prompt',
  promptSchema
);
