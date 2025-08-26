import { UserWithoutPassword, LoginRequest, RegisterRequest } from '../types';
export declare class UserService {
    static createUser(userData: RegisterRequest): Promise<UserWithoutPassword>;
    static validateUser(loginData: LoginRequest): Promise<UserWithoutPassword>;
    static getUserById(userId: string): Promise<UserWithoutPassword | null>;
    static getUserByEmail(email: string): Promise<UserWithoutPassword | null>;
}
//# sourceMappingURL=userService.d.ts.map