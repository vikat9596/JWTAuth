"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// In-memory storage for demo purposes
// In production, you would use a database
const users = [];
class UserService {
    static async createUser(userData) {
        const existingUser = users.find(user => user.email === userData.email);
        if (existingUser) {
            throw new Error('User already exists');
        }
        const hashedPassword = await bcryptjs_1.default.hash(userData.password, 12);
        const newUser = {
            id: Date.now().toString(),
            email: userData.email,
            password: hashedPassword,
            name: userData.name,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        users.push(newUser);
        const { password, ...userWithoutPassword } = newUser;
        return userWithoutPassword;
    }
    static async validateUser(loginData) {
        const user = users.find(user => user.email === loginData.email);
        if (!user) {
            throw new Error('Invalid credentials');
        }
        const isValidPassword = await bcryptjs_1.default.compare(loginData.password, user.password);
        if (!isValidPassword) {
            throw new Error('Invalid credentials');
        }
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    static async getUserById(userId) {
        const user = users.find(user => user.id === userId);
        if (!user) {
            return null;
        }
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    static async getUserByEmail(email) {
        const user = users.find(user => user.email === email);
        if (!user) {
            return null;
        }
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map