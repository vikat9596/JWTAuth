import bcrypt from 'bcryptjs';
import { User, UserWithoutPassword, LoginRequest, RegisterRequest } from '../types';

// In-memory storage for demo purposes
// In production, you would use a database
const users: User[] = [];

export class UserService {
  static async createUser(userData: RegisterRequest): Promise<UserWithoutPassword> {
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(userData.password, 12);
    const newUser: User = {
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

  static async validateUser(loginData: LoginRequest): Promise<UserWithoutPassword> {
    const user = users.find(user => user.email === loginData.email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isValidPassword = await bcrypt.compare(loginData.password, user.password);
    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  static async getUserById(userId: string): Promise<UserWithoutPassword | null> {
    const user = users.find(user => user.id === userId);
    if (!user) {
      return null;
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  static async getUserByEmail(email: string): Promise<UserWithoutPassword | null> {
    const user = users.find(user => user.email === email);
    if (!user) {
      return null;
    }

    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
}
