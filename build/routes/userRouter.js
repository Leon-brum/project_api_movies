"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const userValidations_1 = __importDefault(require("../middlewares/userValidations"));
const userController = new user_controller_1.default();
const router = (0, express_1.Router)();
router.get('/role', userValidations_1.default.token, (req, res) => userController.findById(req, res));
router.post('/', userValidations_1.default.login, (req, res) => userController.login(req, res));
router.post('/create', userValidations_1.default.create, (req, res) => userController.createUser(req, res));
router.delete('/:id', (req, res) => userController.deleteUser(req, res));
exports.default = router;
