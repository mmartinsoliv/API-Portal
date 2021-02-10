import { Request, Response } from 'express'

import { getRepository } from 'typeorm'

import bcrypt from 'bcryptjs'

import jwt from 'jsonwebtoken'

import { User } from '../models/CreateUser'
import { Admin } from '../models/CreateAdmin'


class AuthController {
    async authenticate(req: Request, res: Response){
        const repository = getRepository(User)

        const { email, password } = req.body

        const user = await repository.findOne({where: {email}})

        if(!user){
            return res.sendStatus(401)
        }

        const isValidPassword = await bcrypt.compare(password, user.password)

        if(!isValidPassword){
            return res.sendStatus(401)
        }

        const token = jwt.sign({id: user.id}, 'secret', {expiresIn: '1d'})

        return res.json({
            user, token 
        })

    }
    async authenticateAdmin(req: Request, res: Response){
        const repository = getRepository(Admin)

        const { email, password } = req.body

        const admin = await repository.findOne({where: {email}})

        if(!admin){
            return res.sendStatus(401)
        }

        const isValidPassword = await bcrypt.compare(password, admin.password)

        if(!isValidPassword){
            return res.sendStatus(401)
        }

        const token = jwt.sign({id: admin.id}, 'secret', {expiresIn: '1d'})

        return res.json({
          admin, token 
        })

    }
}

export default new AuthController()