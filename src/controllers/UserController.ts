import { Request, Response } from 'express'

import { getRepository } from 'typeorm'

import { User } from '../models/CreateUser'

class UserController {
    async store(req: Request, res: Response){
        const repository = getRepository(User)

        const { name, lastname, email, password } = req.body

        const userExists = await repository.findOne({where: {email}})

        if(userExists){
            return res.sendStatus(409)
        }

        const user = repository.create({name, lastname, email, password})
        await repository.save(user)

        return res.json(user)
    }

    async index(req: Request, res: Response){
        return res.status(200).json({message: 'Hello user'})
    }
}

export default new UserController()