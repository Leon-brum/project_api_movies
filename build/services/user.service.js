"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../model/UserModel"));
class UserService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userEmail = yield this.userModel.findByEmail(email);
            if (!userEmail)
                return {
                    status: 'UNAUTHORIZED',
                    data: { message: 'email ou password invalidos!' }
                };
            return { status: 'SUCCESSFUL', data: userEmail };
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userModel.findById(id);
            if (!user)
                return {
                    status: 401,
                    message: { message: `O id ${id} não foi encontrado!` }
                };
            return { status: 200, message: { role: user.role } };
        });
    }
}
exports.default = UserService;
