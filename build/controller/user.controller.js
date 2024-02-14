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
const user_service_1 = __importDefault(require("../services/user.service"));
const MapStatusHTTP_1 = __importDefault(require("../utils/MapStatusHTTP"));
class UserController {
    constructor(userService = new user_service_1.default()) {
        this.userService = userService;
    }
    getAllUsers(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const serviceResponse = yield this.userService.getAllUsers();
            return res.status((0, MapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const serviceResponse = yield this.userService.getById(Number(id));
            if (serviceResponse.status !== 'SUCCESSFUL') {
                return res.status((0, MapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
            }
            res.status((0, MapStatusHTTP_1.default)(serviceResponse.status)).json(serviceResponse.data);
        });
    }
}
exports.default = UserController;
