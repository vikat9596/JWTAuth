"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../config/env");
class AuthService {
    static generateToken(user) {
        const payload = {
            userId: user.id,
            email: user.email
        };
        const options = {
            expiresIn: env_1.config.jwtExpiresIn
        };
        return jsonwebtoken_1.default.sign(payload, env_1.config.jwtSecret, options);
    }
    static verifyToken(token) {
        try {
            return jsonwebtoken_1.default.verify(token, env_1.config.jwtSecret);
        }
        catch (error) {
            throw new Error('Invalid token');
        }
    }
    static decodeToken(token) {
        try {
            return jsonwebtoken_1.default.decode(token);
        }
        catch (error) {
            return null;
        }
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=authService.js.map