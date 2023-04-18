/**
 * Author : Ryan
 * Date : 2023-04-16
 * Desc : prompt
 */

import { Router } from 'express';
import { promptControllers } from '../controllers';

const router: Router = Router();

router.post('/', promptControllers.createPromptController);
router.get('/:id', promptControllers.readPromptByIdController);

module.exports = router;

export default router;
