/**
 * Author : Ryan
 * Date : 2023-04-09
 * Desc : index
 */

//router index file
import { Router } from 'express';
import promptRoutes from './promptRoutes';

const router: Router = Router();

router.use('/api', promptRoutes);

export default router;
