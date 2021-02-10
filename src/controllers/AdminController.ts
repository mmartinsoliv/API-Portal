import { Request, Response } from 'express'

import { getRepository } from 'typeorm'

import { Admin } from '../models/CreateAdmin'
import { User } from '../models/CreateUser'


class UserController {
    async store(req: Request, res: Response){
        const repository = getRepository(Admin)

        const { name, email, password } = req.body

        const adminExists = await repository.findOne({where: {email}})

        if(adminExists){
            return res.sendStatus(409)
        }

        const admin = repository.create({name, email, password})
        await repository.save(admin)

        return res.json(admin)
    }

    async index(req: Request, res: Response){
        const userRepository = getRepository(User)

        const users = await userRepository.find()

        if(!users){
            return res.status(404).json({message: 'Not found users'})
        }

        return res.status(200).json(users)
    }
}

export default new UserController()