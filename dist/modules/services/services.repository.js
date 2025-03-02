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
exports.ServicesRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let ServicesRepository = class ServicesRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createService(body) {
        return this.prismaService.service.create({
            data: body,
        });
    }
    async getAllServices(type) {
        const where = {};
        if (type)
            where.type = type;
        return this.prismaService.service.findMany({ where });
    }
    async getServiceById(id) {
        return this.prismaService.service.findUnique({
            where: { id },
        });
    }
    async updateService(id, body) {
        return this.prismaService.service.update({
            where: { id },
            data: body,
        });
    }
    async deleteService(id) {
        await this.prismaService.service.delete({
            where: { id },
        });
    }
    async getUserById(id) {
        return this.prismaService.user.findUnique({ where: { id } });
    }
};
exports.ServicesRepository = ServicesRepository;
exports.ServicesRepository = ServicesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ServicesRepository);
//# sourceMappingURL=services.repository.js.map