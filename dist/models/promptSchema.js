"use strict";
/**
 * Author : Ryan
 * Date : 2023-04-17
 * Desc : prompt models
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const promptSchema = new mongoose_1.default.Schema({
    promptList: {
        type: (Array),
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
}, { versionKey: false });
exports.default = mongoose_1.default.model('prompt', promptSchema);
