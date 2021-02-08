"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const CreateUser_1 = require("../models/CreateUser");
class UserController {
    async store(req, res) {
        const repository = typeorm_1.getRepository(CreateUser_1.User);
        const { name, email, password } = req.body;
        const userExists = await repository.findOne({ where: { email } });
        if (userExists) {
            return res.sendStatus(409);
        }
        const user = repository.create({ name, email, password });
        await repository.save(user);
        return res.json(user);
    }
    async index(req, res) {
        return res.status(200).json({ message: 'Hello user' });
    }
}
exports.default = new UserController();
