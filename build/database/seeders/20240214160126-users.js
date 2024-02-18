'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkInsert('users', [
                {
                    name: 'leonardo',
                    role: 'admin',
                    email: 'admin@admin.com',
                    password: '$2y$10$HUOM8E0yNVp0p6r7GAYs0uU5erQ8d7KyyqLK1duYcyj0I/Dt5LkIq'
                    // senha: senha_admin
                },
                {
                    name: 'Marcos',
                    role: 'admin',
                    email: 'admin@admin.com',
                    password: '$2a$10$TN6TwMIJRCbAT8LEgJQ4reSO.Yks65RoGVZbTH1.WOok569aBgbh.'
                }
            ]);
        });
    },
    down(queryInterface) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkDelete('users', {});
        });
    }
};
