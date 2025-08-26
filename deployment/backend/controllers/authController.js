"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const userService_1 = require("../services/userService");
const authService_1 = require("../services/authService");
class AuthController {
    static async register(req, res) {
        try {
            const userData = req.body;
            const user = await userService_1.UserService.createUser(userData);
            const token = authService_1.AuthService.generateToken(user);
            const response = {
                user,
                token
            };
            res.status(201).json({
                success: true,
                message: 'User registered successfully',
                data: response
            });
        }
        catch (error) {
            res.status(400).json({
                success: false,
                message: error instanceof Error ? error.message : 'Registration failed'
            });
        }
    }
    static async login(req, res) {
        try {
            const loginData = req.body;
            const user = await userService_1.UserService.validateUser(loginData);
            const token = authService_1.AuthService.generateToken(user);
            const response = {
                user,
                token
            };
            res.status(200).json({
                success: true,
                message: 'Login successful',
                data: response
            });
        }
        catch (error) {
            res.status(401).json({
                success: false,
                message: error instanceof Error ? error.message : 'Login failed'
            });
        }
    }
    static async logout(req, res) {
        // In a real application, you might want to blacklist the token
        // For this demo, we'll just return a success response
        res.status(200).json({
            success: true,
            message: 'Logout successful'
        });
    }
    static async getProfile(req, res) {
        try {
            // The user is already attached to req by the auth middleware
            const user = req.user;
            if (!user) {
                res.status(401).json({
                    success: false,
                    message: 'User not authenticated'
                });
                return;
            }
            res.status(200).json({
                success: true,
                data: user
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: 'Failed to get user profile'
            });
        }
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=authController.js.map