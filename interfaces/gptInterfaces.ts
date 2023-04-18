/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : gptInterfaces
 */

export interface IMessageRole {
  role: string;
  content: string;
}

export interface ISendGptChainReq {
  assistant: Array<{ prompt: string; answer: string }>;
  input: string;
}

export interface ISendGptChainRes {
  prompt: string;
  answer: string;
}

export interface ISendGptRelationReq {
  assistant: Array<{ prompt: string; answer: string }>;
  input: string;
}

export interface ISendGptRelationRes {
  result: string;
}
