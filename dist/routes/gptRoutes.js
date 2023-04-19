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
router.get('/recommend', controllers_1.gptControllers.sendGptRecommendController);
router.post('/chain', controllers_1.gptControllers.sendGptChainController);
router.post('/relation', controllers_1.gptControllers.sendGptRelationController);
module.exports = router;
exports.default = router;
