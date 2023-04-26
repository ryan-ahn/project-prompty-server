/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : index
 */

//router index file
import { Router } from 'express';
import promptRoutes from './promptRoutes';
import gptRoutes from './gptRoutes';

const router: Router = Router();

router.use('/v1/prompt', promptRoutes);
router.use('/v1/gpt', gptRoutes);

export default router;
