/**
 * Author : Ryan
 * Date : 2023-04-19
 * Desc : env.d
 */

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV?: 'development' | 'production';
  }
}
