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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteRequestController = void 0;
const common_1 = require("@nestjs/common");
const quote_request_service_1 = require("./quote-request.service");
const create_quote_request_dto_1 = require("./dto/create-quote-request.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const user_decorator_1 = require("../../common/decorators/user.decorator");
const user_interface_1 = require("../auth/dto/user.interface");
let QuoteRequestController = class QuoteRequestController {
    constructor(quoteRequestService) {
        this.quoteRequestService = quoteRequestService;
    }
    async create(body) {
        return await this.quoteRequestService.create(body);
    }
    async findAll(user) {
        return await this.quoteRequestService.findAll(user);
    }
    async findOne(id, user) {
        return await this.quoteRequestService.findOne(+id, user);
    }
    async remove(id, user) {
        return await this.quoteRequestService.remove(+id, user);
    }
};
exports.QuoteRequestController = QuoteRequestController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new quote request' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Quote request created successfully',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_quote_request_dto_1.CreateQuoteRequestDto]),
    __metadata("design:returntype", Promise)
], QuoteRequestController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all quote requests' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of quote requests' }),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_interface_1.IUser]),
    __metadata("design:returntype", Promise)
], QuoteRequestController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a single quote request by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Quote request found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Quote request not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_interface_1.IUser]),
    __metadata("design:returntype", Promise)
], QuoteRequestController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a quote request' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Quote request deleted successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Quote request not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_interface_1.IUser]),
    __metadata("design:returntype", Promise)
], QuoteRequestController.prototype, "remove", null);
exports.QuoteRequestController = QuoteRequestController = __decorate([
    (0, swagger_1.ApiTags)('Quote Requests'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)({ path: 'quote-request', version: '1' }),
    __metadata("design:paramtypes", [quote_request_service_1.QuoteRequestService])
], QuoteRequestController);
//# sourceMappingURL=quote-request.controller.js.map