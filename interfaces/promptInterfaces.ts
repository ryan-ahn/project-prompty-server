/**
 * Author : Ryan
 * Date : 2023-04-17
 * Desc : prompt
 */

import mongoose from 'mongoose';

export interface IPromptBaseResponseDto {
  _id: mongoose.Schema.Types.ObjectId;
}

export interface IPromptInfo {
  promptList: Array<{ prompt: String; answer: String }>;
  category: String;
  author: String;
  createAt: Date;
  modifyAt: Date;
}

export interface IPromptCreateDto {
  promptList: Array<{ prompt: String; answer: String }>;
  category: String;
  author?: String;
  createAt?: Date;
  modifyAt?: Date;
}

export interface IPromptResponseDto extends IPromptCreateDto {
  _id: mongoose.Schema.Types.ObjectId;
}

export interface IPromptUpdateDto {
  _id: mongoose.Schema.Types.ObjectId;
  promptList: Array<{ prompt: String; answer: String }>;
  category: String;
  author: String;
  createAt?: Date;
  modifyAt?: Date;
}
