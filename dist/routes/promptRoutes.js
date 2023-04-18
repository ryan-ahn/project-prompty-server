"use strict";
/**
 * Author : Ryan
 * Date : 2023-04-16
 * Desc : prompt
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.post('/', controllers_1.promptControllers.createPromptController);
router.get('/:id', controllers_1.promptControllers.readPromptByIdController);
module.exports = router;
exports.default = router;
