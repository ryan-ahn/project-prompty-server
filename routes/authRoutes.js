/**
 * Author : Ryan
 * Date : 2023-04-30
 * Desc : userRoutes
 */

const express = require('express');
const authControllers = require('../controllers/authControllers');

const router = express.Router();

router.get('/kakao/init', authControllers.kakaoInitController);
router.get('/kakao/callback/:id', authControllers.kakaoCallbackController);
router.get('/token/access', authControllers.authTokenAccessController);
router.get('/token/verify', authControllers.authTokenVerifyController);

module.exports = router;
