/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : index
 */

//router index file
const express = require('express');
const authRoutes = require('./authRoutes');
const promptRoutes = require('./promptRoutes');
const gptRoutes = require('./gptRoutes');

const router = express.Router();

router.use('/v1/prompt', promptRoutes);
router.use('/v1/gpt', gptRoutes);
router.use('/v1/auth', authRoutes);

module.exports = router;
