/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : index
 */

//router index file
const express = require('express');
const authRoutes = require('./authRoutes');
const promptRoutes = require('./promptRoutes');
const pilotRoutes = require('./pilotRoutes');
const gptRoutes = require('./gptRoutes');

const router = express.Router();

router.use('/v1/prompt', promptRoutes);
router.use('/v1/gpt', gptRoutes);
router.use('/v1/auth', authRoutes);
router.use('/v1/pilot', pilotRoutes);

module.exports = router;
