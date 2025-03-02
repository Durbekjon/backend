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
exports.InformationRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let InformationRepository = class InformationRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(data) {
        return this.prismaService.information.create({ data });
    }
    async findOne() {
        return this.prismaService.information.findFirst();
    }
    async update(id, data) {
        return this.prismaService.information.update({
            where: { id },
            data,
        });
    }
    async delete(id) {
        await this.prismaService.information.delete({ where: { id } });
    }
    async getUserById(id) {
        return this.prismaService.user.findUnique({ where: { id } });
    }
};
exports.InformationRepository = InformationRepository;
exports.InformationRepository = InformationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], InformationRepository);
//# sourceMappingURL=information.repository.js.map