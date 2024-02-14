"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapStatusHTTP(status) {
    switch (status) {
        case 'SUCCESSFUL': return 200;
        case 'CREATE': return 201;
        case 'INVALID_DATA': return 400;
        case 'UNAUTHORIZED': return 401;
        case 'NOT_FOUND': return 404;
        case 'CONFLICT': return 409;
        case 'INTERNAL_ERRO': return 500;
        default: return 500;
    }
}
exports.default = mapStatusHTTP;
