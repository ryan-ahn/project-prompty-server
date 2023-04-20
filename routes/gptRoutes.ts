/**
 * Author : Ryan
 * Date : 2023-04-18
 * Desc : gptRoutes
 */

import { Router } from 'express';
import { gptControllers } from '../controllers';

const router: Router = Router();

router.post('/recommend', gptControllers.sendGptRecommendController);
router.post('/chain', gptControllers.sendGptChainController);
router.post('/relation', gptControllers.sendGptRelationController);

module.exports = router;

export default router;
