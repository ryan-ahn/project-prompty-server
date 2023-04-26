/**
 * Author : Ryan
 * Date : 2023-04-23
 * Desc : authRoutes
 */

import { Router } from 'express';
import passport from 'passport';

const router: Router = Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (_, res) => {
    res.redirect('/');
  }
);

module.exports = router;

export default router;
