"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
typeorm_1.createConnection().then(() => console.log('Database connected with successfully'));
