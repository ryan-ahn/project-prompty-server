/**
 * Author : Ryan
 * Date : 2023-05-01
 * Desc : userModels
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    phone: {
      type: Number,
      required: false,
    },
    birth: {
      type: String,
      required: false,
    },
    profileImage: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: false,
    },
    introduce: {
      type: String,
      required: false,
    },
    createAt: {
      type: Date,
      required: true,
    },
    updateAt: {
      type: Date,
      required: true,
    },
    deleteAt: {
      type: Date,
      required: false,
    },
    signinAt: {
      type: Date,
      require: false,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model('user', userSchema);
