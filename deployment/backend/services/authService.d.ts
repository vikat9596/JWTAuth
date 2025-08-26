import { UserWithoutPassword, JWTPayload } from '../types';
export declare class AuthService {
    static generateToken(user: UserWithoutPassword): string;
    static verifyToken(token: string): JWTPayload;
    static decodeToken(token: string): JWTPayload | null;
}
//# sourceMappingURL=authService.d.ts.map