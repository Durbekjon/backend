"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./modules/auth/auth.module");
const prisma_module_1 = require("./common/prisma/prisma.module");
const utils_module_1 = require("./common/utils/utils.module");
const config_1 = require("@nestjs/config");
const information_module_1 = require("./modules/information/information.module");
const mail_module_1 = require("./common/mail/mail.module");
const contact_form_module_1 = require("./modules/contact-form/contact-form.module");
const services_module_1 = require("./modules/services/services.module");
const visit_module_1 = require("./modules/visit/visit.module");
const quote_request_module_1 = require("./modules/quote-request/quote-request.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            utils_module_1.UtilsModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            information_module_1.InformationModule,
            mail_module_1.MailModule,
            contact_form_module_1.ContactFormModule,
            services_module_1.ServicesModule,
            visit_module_1.VisitModule,
            quote_request_module_1.QuoteRequestModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map