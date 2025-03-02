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
exports.QuoteRequestRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../common/prisma/prisma.service");
const client_1 = require("@prisma/client");
const mail_service_1 = require("../../common/mail/mail.service");
const config_1 = require("@nestjs/config");
let QuoteRequestRepository = class QuoteRequestRepository {
    constructor(prismaService, mailService, configService) {
        this.prismaService = prismaService;
        this.mailService = mailService;
        this.configService = configService;
    }
    async create(body) {
        const data = {
            firstName: body.name,
            from: body.email,
            to: await this.configService.get(body.quoteType + '_MAIL'),
            subject: body.requestType,
            message: body.message,
            createdAt: new Date(),
        };
        await this.mailService.sendContactFormMessage(data);
        return this.prismaService.quoteRequest.create({ data: body });
    }
    async findAll() {
        const [edu, travel, quoteRequests, degreePrograms, fullVipAssistance, groundTransportation, internships, meetAndGreet, shortTermPrograms, teacherTrainings, tourPackage,] = await Promise.all([
            this.countQuoteType(client_1.QuoteType.EDU),
            this.countQuoteType(client_1.QuoteType.TRAVEL),
            this.prismaService.quoteRequest.findMany(),
            this.countRequestType(client_1.RequestType.DEGREE_PROGRAMS),
            this.countRequestType(client_1.RequestType.FULL_VIP_ASSISTANCE),
            this.countRequestType(client_1.RequestType.GROUND_TRANSPORTATION),
            this.countRequestType(client_1.RequestType.INTERNSHIPS),
            this.countRequestType(client_1.RequestType.MEET_AND_GREET_FAST_TRACK),
            this.countRequestType(client_1.RequestType.SHORT_TERM_PROGRAMS),
            this.countRequestType(client_1.RequestType.TEACHER_TRAININGS),
            this.countRequestType(client_1.RequestType.TOUR_PACKAGE),
        ]);
        return {
            edu,
            travel,
            quoteRequests,
            requestCounts: {
                degreePrograms,
                fullVipAssistance,
                groundTransportation,
                internships,
                meetAndGreet,
                shortTermPrograms,
                teacherTrainings,
                tourPackage,
            },
        };
    }
    async countQuoteType(quoteType) {
        return this.prismaService.quoteRequest.count({
            where: { quoteType: quoteType },
        });
    }
    async countRequestType(requestType) {
        return this.prismaService.quoteRequest.count({
            where: { requestType: requestType },
        });
    }
    async findOne(id) {
        return this.prismaService.quoteRequest.findUnique({
            where: { id },
        });
    }
    async delete(id) {
        return this.prismaService.quoteRequest.delete({ where: { id } });
    }
};
exports.QuoteRequestRepository = QuoteRequestRepository;
exports.QuoteRequestRepository = QuoteRequestRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mail_service_1.MailService,
        config_1.ConfigService])
], QuoteRequestRepository);
//# sourceMappingURL=quote-request.repository.js.map