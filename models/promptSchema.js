/**
 * Author : Ryan
 * Date : 2023-04-17
 * Desc : prompt models
 */

const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema(
  {
    promptList: {
      type: Array,
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

module.exports = mongoose.model('prompt', promptSchema);
