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
exports.VisitService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
let VisitService = class VisitService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addVisit() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        let startDate = new Date(year, month, 1);
        let endDate = new Date(year, month + 1, 1);
        let dbMonth = await this.prisma.visit.findFirst({
            where: {
                date: { gte: startDate, lt: endDate },
            },
        });
        if (!dbMonth) {
            startDate = new Date(year, month - 1, 1);
            endDate = new Date(year, month, 1);
            await this.prisma.visit.updateMany({
                where: { date: { gte: startDate, lt: startDate } },
                data: { visits: [] },
            });
            const newMonth = await this.prisma.visit.create({
                data: { count: 1, date, visits: [date] },
            });
            return newMonth;
        }
        else {
            return await this.prisma.visit.update({
                where: { id: dbMonth.id },
                data: { count: dbMonth.count + 1, visits: { push: date } },
            });
        }
    }
    async getVisits() {
        return await this.prisma.visit.findMany();
    }
    async clearFullVisits() {
        await this.prisma.visit.deleteMany({});
        return { result: 'OK' };
    }
};
exports.VisitService = VisitService;
exports.VisitService = VisitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VisitService);
//# sourceMappingURL=visit.service.js.map