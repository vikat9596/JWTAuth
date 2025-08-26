import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { AuthService } from '../services/authService';
import { LoginRequest, RegisterRequest, AuthResponse, AuthenticatedRequest } from '../types';

export class AuthController {
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const userData: RegisterRequest = req.body;
      const user = await UserService.createUser(userData);
      const token = AuthService.generateToken(user);

      const response: AuthResponse = {
        user,
        token
      };

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: response
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error instanceof Error ? error.message : 'Registration failed'
      });
    }
  }

  static async login(req: Request, res: Response): Promise<void> {
    try {
      const loginData: LoginRequest = req.body;
      const user = await UserService.validateUser(loginData);
      const token = AuthService.generateToken(user);

      const response: AuthResponse = {
        user,
        token
      };

      res.status(200).json({
        success: true,
        message: 'Login successful',
        data: response
      });
    } catch (error) {
      res.status(401).json({
        success: false,
        message: error instanceof Error ? error.message : 'Login failed'
      });
    }
  }

  static async logout(req: Request, res: Response): Promise<void> {
    // In a real application, you might want to blacklist the token
    // For this demo, we'll just return a success response
    res.status(200).json({
      success: true,
      message: 'Logout successful'
    });
  }

  static async getProfile(req: Request, res: Response): Promise<void> {
    try {
      // The user is already attached to req by the auth middleware
      const user = (req as AuthenticatedRequest).user;
      
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
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Failed to get user profile'
      });
    }
  }
}
