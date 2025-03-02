import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { AuthService } from './services/auth.service';
import { IUser } from './dto/user.interface';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginDto): Promise<LoginResponseDto>;
    whoAmI(user: IUser): Promise<{
        username: string;
        password: string;
        id: number;
    }>;
    refreshTokens(user: IUser): Promise<LoginResponseDto>;
}
