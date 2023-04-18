'use strict';
/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : responseMessage
 */
Object.defineProperty(exports, '__esModule', { value: true });
const message = {
  NULL_VALUE: '필요한 값이 없습니다.',
  NOT_FOUND: '존재하지 않는 자원',
  BAD_REQUEST: '잘못된 요청',
  INTERNAL_SERVER_ERROR: '서버 내부 오류',
  // 포스팅 조회
  SUCCESS: '성공',
  READ_SUCCESS: '조회 성공',
  CREATE_SUCCESS: '생성 성공',
  DELETE_SUCCESS: '삭제 성공',
  UPDATE_SUCCESS: '수정 성공',
};
exports.default = message;
