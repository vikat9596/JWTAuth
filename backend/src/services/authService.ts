import jwt, { SignOptions } from 'jsonwebtoken';
import type { StringValue } from 'ms';
import { config } from '../config/env';
import { UserWithoutPassword, JWTPayload } from '../types';

export class AuthService {
  static generateToken(user: UserWithoutPassword): string {
    const payload: Omit<JWTPayload, 'iat' | 'exp'> = {
      userId: user.id,
      email: user.email
    };

    const options: SignOptions = {
      expiresIn: config.jwtExpiresIn as StringValue
    };
    return jwt.sign(payload, config.jwtSecret, options);
  }

  static verifyToken(token: string): JWTPayload {
    try {
      return jwt.verify(token, config.jwtSecret as jwt.Secret) as JWTPayload;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }

  static decodeToken(token: string): JWTPayload | null {
    try {
      return jwt.decode(token) as JWTPayload;
    } catch (error) {
      return null;
    }
  }
}
