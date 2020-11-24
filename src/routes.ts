import { Router } from 'express'

import UserController from './controllers/UserController'
import AuthController from './controllers/AuthController'

import authMiddleware from './middlewares/auth'

const router = Router()

router.post('/users', UserController.store)
router.post('/sessions', AuthController.authenticate)

router.get('/users', authMiddleware, UserController.index)

export default router