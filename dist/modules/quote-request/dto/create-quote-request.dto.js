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
exports.CreateQuoteRequestDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class CreateQuoteRequestDto {
}
exports.CreateQuoteRequestDto = CreateQuoteRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'John Doe',
        description: 'Full name of the requester',
        minLength: 2,
        maxLength: 255,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 255),
    __metadata("design:type", String)
], CreateQuoteRequestDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'johndoe@example.com',
        description: 'Email address of the requester',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateQuoteRequestDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        example: '+1234567890',
        description: 'Phone number of the requester in E.164 format',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQuoteRequestDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'I am interested in your travel services.',
        description: 'Message from the requester',
        minLength: 10,
        maxLength: 1000,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(5, 2000),
    __metadata("design:type", String)
], CreateQuoteRequestDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: client_1.QuoteType.TRAVEL,
        enum: client_1.QuoteType,
        description: 'Type of quote requested',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(client_1.QuoteType),
    __metadata("design:type", String)
], CreateQuoteRequestDto.prototype, "quoteType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: client_1.RequestType.TOUR_PACKAGE,
        enum: client_1.RequestType,
        description: 'Specific request type',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(client_1.RequestType),
    __metadata("design:type", String)
], CreateQuoteRequestDto.prototype, "requestType", void 0);
//# sourceMappingURL=create-quote-request.dto.js.map