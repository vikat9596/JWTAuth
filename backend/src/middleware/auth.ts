import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/env';
import { JWTPayload, AuthenticatedRequest } from '../types';

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret as jwt.Secret) as JWTPayload;
    (req as AuthenticatedRequest).user = {
      id: decoded.userId,
      email: decoded.email,
      name: '', // We'll get this from the user service
      createdAt: new Date(),
      updatedAt: new Date()
    };
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};
