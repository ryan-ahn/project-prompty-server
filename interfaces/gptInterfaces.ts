/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : gptInterfaces
 */

export interface IMessageRole {
  role: string;
  content: string;
}

export interface ISendGptReq {
  assistant: Array<{ prompt: string; answer: string }>;
  input: string;
}

export interface ISendGptRes {
  prompt: string;
  answer: string;
}
