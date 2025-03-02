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
exports.ServicesService = void 0;
const common_1 = require("@nestjs/common");
const services_repository_1 = require("./services.repository");
const app_messages_1 = require("../../common/app-messages");
let ServicesService = class ServicesService {
    constructor(servicesRepository) {
        this.servicesRepository = servicesRepository;
    }
    async create(body, user) {
        await this.validateUser(user);
        return this.servicesRepository.createService(body);
    }
    findAll(type) {
        return this.servicesRepository.getAllServices(type);
    }
    async findOne(id) {
        const service = await this.servicesRepository.getServiceById(id);
        if (!service)
            throw new common_1.NotFoundException();
        return service;
    }
    async update(id, body, user) {
        await this.validateUser(user);
        return this.servicesRepository.updateService(id, body);
    }
    async remove(id, user) {
        const [_, service] = await Promise.all([
            await this.validateUser(user),
            await this.servicesRepository.getServiceById(id),
        ]);
        if (!service)
            throw new common_1.NotFoundException();
        await this.servicesRepository.deleteService(id);
        return { result: 'OK' };
    }
    async validateUser(user) {
        const isUserExist = await this.servicesRepository.getUserById(user.id);
        if (!isUserExist) {
            throw new common_1.ForbiddenException(app_messages_1.APP_MESSAGES.USER_NOT_AUTHORIZED);
        }
    }
};
exports.ServicesService = ServicesService;
exports.ServicesService = ServicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_repository_1.ServicesRepository])
], ServicesService);
//# sourceMappingURL=services.service.js.map