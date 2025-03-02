"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_repository_1 = require("../auth.repository");
const app_messages_1 = require("../../../common/app-messages");
const utils_service_1 = require("../../../common/utils/utils.service");
const auth_token_service_1 = require("./auth-token.service");
let AuthService = class AuthService {
    constructor(authRepository, utilsService, authTokenService) {
        this.authRepository = authRepository;
        this.utilsService = utilsService;
        this.authTokenService = authTokenService;
    }
    async login(body) {
        const user = await this.authRepository.findByUsername(body.username);
        if (!user) {
            throw new common_1.BadRequestException(app_messages_1.APP_MESSAGES.INVALID_USERNAME.replace('_USERNAME_', body.username));
        }
        const isPasswordCorrect = await this.utilsService.comparePassword(body.password, user.password);
        if (!isPasswordCorrect) {
            throw new common_1.ForbiddenException(app_messages_1.APP_MESSAGES.INCORRECT_PASSWORD);
        }
        return this.authTokenService.createTokens(user.id);
    }
    async whoAmI(user) {
        const data = this.authRepository.findById(user.id);
        if (!data) {
            throw new common_1.UnauthorizedException();
        }
        return data;
    }
    async updateTokens(user) {
        const data = this.authRepository.findById(user.id);
        if (!data) {
            throw new common_1.UnauthorizedException();
        }
        return this.authTokenService.createTokens(user.id);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        utils_service_1.UtilsService,
        auth_token_service_1.AuthTokenService])
], AuthService);
//# sourceMappingURL=auth.service.js.map