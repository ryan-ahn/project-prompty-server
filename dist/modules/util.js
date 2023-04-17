"use strict";
/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : util
 */
Object.defineProperty(exports, "__esModule", { value: true });
const util = {
    success: (status, message, data) => {
        return {
            status,
            success: true,
            message,
            data,
        };
    },
    fail: (status, message, data) => {
        return {
            status,
            success: false,
            message,
        };
    },
};
exports.default = util;
