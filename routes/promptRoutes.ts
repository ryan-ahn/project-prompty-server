/**
 * Author : Ryan
 * Date : 2023-04-16
 * Desc : prompt
 */

import { Router } from 'express';
import { promptControllers } from '../controllers';

const router: Router = Router();

router.post('/prompt/', promptControllers.createPromptController);
router.get('/prompt/:id', promptControllers.readPromptByIdController);

module.exports = router;

export default router;
