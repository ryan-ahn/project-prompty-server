/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : gptRoutes
 */

import { Router } from 'express';
import { gptControllers } from '../controllers';

const router: Router = Router();

router.post('/chain', gptControllers.sendGptController);
router.get('/relation', gptControllers.sendGptController);

module.exports = router;

export default router;
