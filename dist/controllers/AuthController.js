"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const CreateUser_1 = require("../models/CreateUser");
class AuthController {
    async authenticate(req, res) {
        const repository = typeorm_1.getRepository(CreateUser_1.User);
        const { email, password } = req.body;
        const user = await repository.findOne({ where: { email } });
        if (!user) {
            return res.sendStatus(401);
        }
        const isValidPassword = await bcryptjs_1.default.compare(password, user.password);
        if (!isValidPassword) {
            return res.sendStatus(401);
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id }, 'secret', { expiresIn: '1d' });
        return res.json({
            user, token
        });
    }
}
exports.default = new AuthController();
