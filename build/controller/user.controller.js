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
const bcryptjs_1 = require("bcryptjs");
const user_service_1 = __importDefault(require("../services/user.service"));
const MapStatusHTTP_1 = __importDefault(require("../utils/MapStatusHTTP"));
const jwt_1 = __importDefault(require("../jwt/jwt"));
class UserController {
    constructor(userService = new user_service_1.default()) {
        this.userService = userService;
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const { status, data } = yield this.userService.getByEmail(email);
            const { id, name, role, email: userEmail, password: userPassword } = data;
            if (status !== 'SUCCESSFUL') {
                return res.status((0, MapStatusHTTP_1.default)(status)).json(data);
            }
            if (!(0, bcryptjs_1.compareSync)(password, userPassword)) {
                return res.status((0, MapStatusHTTP_1.default)(status)).json({ message: 'email ou password invalidos!!' });
            }
            const token = jwt_1.default.sign({ id, name, role, userEmail, userPassword });
            return res.status((0, MapStatusHTTP_1.default)(status)).json({ token });
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { token } = req;
            if (!token)
                return res.status(401).json({ message: 'missing token' });
            const user = yield this.userService.getById(token.id);
            return res.status(user.status).json(user.message);
        });
    }
}
exports.default = UserController;
