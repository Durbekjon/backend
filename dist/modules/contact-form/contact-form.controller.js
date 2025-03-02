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
exports.ContactFormController = void 0;
const common_1 = require("@nestjs/common");
const contact_form_service_1 = require("./contact-form.service");
const create_contact_form_dto_1 = require("./dto/create-contact-form.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const user_interface_1 = require("../auth/dto/user.interface");
const user_decorator_1 = require("../../common/decorators/user.decorator");
let ContactFormController = class ContactFormController {
    constructor(contactFormService) {
        this.contactFormService = contactFormService;
    }
    create(body) {
        return this.contactFormService.create(body);
    }
    findAll(user) {
        return this.contactFormService.findAll(user);
    }
    findOne(id, user) {
        return this.contactFormService.findOne(+id, user);
    }
    remove(id, user) {
        return this.contactFormService.remove(+id, user);
    }
};
exports.ContactFormController = ContactFormController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_form_dto_1.CreateContactFormDto]),
    __metadata("design:returntype", void 0)
], ContactFormController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AtAuthGuard),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_interface_1.IUser]),
    __metadata("design:returntype", void 0)
], ContactFormController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_interface_1.IUser]),
    __metadata("design:returntype", void 0)
], ContactFormController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_interface_1.IUser]),
    __metadata("design:returntype", void 0)
], ContactFormController.prototype, "remove", null);
exports.ContactFormController = ContactFormController = __decorate([
    (0, swagger_1.ApiTags)('Contact Form'),
    (0, common_1.Controller)({ path: 'contact-form', version: '1' }),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [contact_form_service_1.ContactFormService])
], ContactFormController);
//# sourceMappingURL=contact-form.controller.js.map