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

router.use('/prompt', promptRoutes);
router.use('/gpt', gptRoutes);

export default router;
