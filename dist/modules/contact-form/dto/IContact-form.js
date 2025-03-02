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
exports.IContactForm = void 0;
const swagger_1 = require("@nestjs/swagger");
const client_1 = require("@prisma/client");
class IContactForm {
}
exports.IContactForm = IContactForm;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], IContactForm.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: client_1.SubjectType, default: client_1.SubjectType.other }),
    __metadata("design:type", String)
], IContactForm.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John' }),
    __metadata("design:type", String)
], IContactForm.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe' }),
    __metadata("design:type", String)
], IContactForm.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@example.com' }),
    __metadata("design:type", String)
], IContactForm.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'This is a message.' }),
    __metadata("design:type", String)
], IContactForm.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: new Date().toISOString() }),
    __metadata("design:type", Date)
], IContactForm.prototype, "createdAt", void 0);
//# sourceMappingURL=IContact-form.js.map