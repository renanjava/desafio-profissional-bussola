import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn({ username, password }: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
}
