"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const userController = new user_controller_1.default();
const router = (0, express_1.Router)();
router.get('/role', (req, res) => userController.findById(req, res));
router.post('/', (req, res) => userController.login(req, res));
exports.default = router;
