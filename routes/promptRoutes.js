/**
 * Author : Ryan
 * Date : 2023-04-16
 * Desc : prompt
 */

const express = require('express');
const promptControllers = require('../controllers/promptControllers');

const router = express.Router();

router.post('/', promptControllers.createPromptController);
router.get('/:id', promptControllers.readPromptByIdController);

module.exports = router;
