"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const AuthController_1 = __importDefault(require("./controllers/AuthController"));
const auth_1 = __importDefault(require("./middlewares/auth"));
const router = express_1.Router();
router.post('/users', UserController_1.default.store);
router.post('/sessions', AuthController_1.default.authenticate);
router.get('/users', auth_1.default, UserController_1.default.index);
exports.default = router;
