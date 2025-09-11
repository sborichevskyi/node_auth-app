import express from'express';
import * as authController from '../controllers/auth.controller.js';
import { isAuth } from '../midlewares/isAuthenticated.js';

export const authRouter = express.Router();

authRouter.post('/registration', authController.register);
authRouter.get('/activate', authController.activate);
authRouter.post('/login', authController.login);
authRouter.get('/refresh', authController.refresh);
authRouter.get('/logout', isAuth, authController.logout);
authRouter.post('/reset-password', authController.requestResetPassword);
authRouter.post('/reset-password/confirm', authController.resetPassword);
