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
exports.AuthTokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_options_1 = require("../../../common/jwt-options");
const config_1 = require("@nestjs/config");
let AuthTokenService = class AuthTokenService {
    constructor(jwtService, configService) {
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async createTokens(userId) {
        const accessToken = await this.createAccessToken(userId);
        const refreshToken = await this.createRefreshToken(userId);
        return {
            accessToken,
            refreshToken,
        };
    }
    async createAccessToken(userId) {
        const secret = this.configService.get('ACCESS_TOKEN_SECRET');
        return await this.jwtService.signAsync({ id: userId }, { secret });
    }
    async createRefreshToken(userId) {
        const expiresIn = jwt_options_1.REFRESH_TOKEN_EXPIRES_IN;
        return await this.jwtService.signAsync({
            id: userId,
        }, {
            secret: this.configService.get('REFRESH_TOKEN_SECRET'),
            expiresIn,
        });
    }
};
exports.AuthTokenService = AuthTokenService;
exports.AuthTokenService = AuthTokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], AuthTokenService);
//# sourceMappingURL=auth-token.service.js.map