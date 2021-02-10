import { Router } from 'express'

import UserController from './controllers/UserController'
import AdminController from './controllers/AdminController'
import AuthController from './controllers/AuthController'

import authMiddleware from './middlewares/auth'

const router = Router()

router.get('/', (req, res) => {
    return res.json({message: 'Hello heroku'})
})

// Users
router.post('/users', authMiddleware, UserController.store)
router.post('/sessions', AuthController.authenticate)

router.get('/users', authMiddleware, UserController.index)

// Admin
router.post('/admin', AdminController.store)
router.post('/signin', AuthController.authenticateAdmin)
router.get('/admin/users', authMiddleware ,AdminController.index)

export default router