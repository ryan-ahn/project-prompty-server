"use strict";
/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : index
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//router index file
const express_1 = require("express");
const promptRoutes_1 = __importDefault(require("./promptRoutes"));
const gptRoutes_1 = __importDefault(require("./gptRoutes"));
const router = (0, express_1.Router)();
router.use('/prompt', promptRoutes_1.default);
router.use('/gpt', gptRoutes_1.default);
exports.default = router;
