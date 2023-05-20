/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : gptRoutes
 */

const express = require('express');
const gptControllers = require('../controllers/gptControllers');

const router = express.Router();

router.post('/recommend', gptControllers.sendGptRecommendController);
router.post('/chain', gptControllers.sendGptChainController);
router.post('/relation', gptControllers.sendGptRelationController);

module.exports = router;
