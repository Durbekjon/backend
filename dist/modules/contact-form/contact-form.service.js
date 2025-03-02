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
exports.ContactFormService = void 0;
const common_1 = require("@nestjs/common");
const contact_form_repository_1 = require("./contact-form.repository");
const config_1 = require("@nestjs/config");
const mail_service_1 = require("../../common/mail/mail.service");
const app_messages_1 = require("../../common/app-messages");
const client_1 = require("@prisma/client");
let ContactFormService = class ContactFormService {
    constructor(contactFormRepository, configService, mailService) {
        this.contactFormRepository = contactFormRepository;
        this.configService = configService;
        this.mailService = mailService;
    }
    async create(body) {
        const contactForm = await this.contactFormRepository.create(body);
        const { subject } = body;
        if ((subject && subject == 'edu') || subject == 'travel') {
            const adminEmail = this.configService.get(`${subject.toUpperCase()}_EMAIL`);
            const data = {
                from: body.email,
                to: adminEmail,
                subject,
                ...body,
                createdAt: contactForm.createdAt,
            };
            await this.mailService.sendContactFormMessage(data);
        }
        return { result: 'OK' };
    }
    async findAll(user) {
        await this.validateUser(user);
        const [contactForms, business, edu, travel, other] = await Promise.all([
            this.contactFormRepository.findAll(),
            this.contactFormRepository.getCount(client_1.SubjectType.business),
            this.contactFormRepository.getCount(client_1.SubjectType.edu),
            this.contactFormRepository.getCount(client_1.SubjectType.travel),
            this.contactFormRepository.getCount(client_1.SubjectType.other),
        ]);
        return { contactForms, business, edu, travel, other };
    }
    async findOne(id, user) {
        await this.validateUser(user);
        return this.contactFormRepository.findOne(id);
    }
    async remove(id, user) {
        await this.validateUser(user);
        await this.contactFormRepository.delete(id);
        return { result: 'OK' };
    }
    async validateUser(user) {
        const isExistUser = await this.contactFormRepository.getUserById(user.id);
        if (!isExistUser) {
            throw new common_1.ForbiddenException(app_messages_1.APP_MESSAGES.USER_NOT_AUTHORIZED);
        }
        return true;
    }
};
exports.ContactFormService = ContactFormService;
exports.ContactFormService = ContactFormService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [contact_form_repository_1.ContactFormRepository,
        config_1.ConfigService,
        mail_service_1.MailService])
], ContactFormService);
//# sourceMappingURL=contact-form.service.js.map