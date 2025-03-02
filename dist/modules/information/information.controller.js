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
exports.InformationController = void 0;
const common_1 = require("@nestjs/common");
const information_service_1 = require("./information.service");
const create_information_dto_1 = require("./dto/create-information.dto");
const update_information_dto_1 = require("./dto/update-information.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const user_interface_1 = require("../auth/dto/user.interface");
const user_decorator_1 = require("../../common/decorators/user.decorator");
let InformationController = class InformationController {
    constructor(informationService) {
        this.informationService = informationService;
    }
    create(body, user) {
        return this.informationService.create(body, user);
    }
    find() {
        return this.informationService.find();
    }
    update(id, body, user) {
        return this.informationService.update(+id, body, user);
    }
    remove(id, user) {
        return this.informationService.remove(+id, user);
    }
};
exports.InformationController = InformationController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_information_dto_1.CreateInformationDto, user_interface_1.IUser]),
    __metadata("design:returntype", void 0)
], InformationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InformationController.prototype, "find", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_information_dto_1.UpdateInformationDto,
        user_interface_1.IUser]),
    __metadata("design:returntype", void 0)
], InformationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.AtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_interface_1.IUser]),
    __metadata("design:returntype", void 0)
], InformationController.prototype, "remove", null);
exports.InformationController = InformationController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)({ path: 'information', version: '1' }),
    __metadata("design:paramtypes", [information_service_1.InformationService])
], InformationController);
//# sourceMappingURL=information.controller.js.map