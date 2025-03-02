import { AuthRepository } from '../auth.repository';
import { LoginDto } from '../dto/login.dto';
import { UtilsService } from '../../../common/utils/utils.service';
import { AuthTokenService } from './auth-token.service';
import { LoginResponseDto } from '../dto/login-response.dto';
import { IUser } from '../dto/user.interface';
export declare class AuthService {
    private readonly authRepository;
    private readonly utilsService;
    private readonly authTokenService;
    constructor(authRepository: AuthRepository, utilsService: UtilsService, authTokenService: AuthTokenService);
    login(body: LoginDto): Promise<LoginResponseDto>;
    whoAmI(user: IUser): Promise<{
        username: string;
        password: string;
        id: number;
    }>;
    updateTokens(user: IUser): Promise<LoginResponseDto>;
}
