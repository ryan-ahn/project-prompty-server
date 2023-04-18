"use strict";
/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : gptRoutes
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.post('/chain', controllers_1.gptControllers.sendGptController);
router.get('/relation', controllers_1.gptControllers.sendGptController);
module.exports = router;
exports.default = router;
