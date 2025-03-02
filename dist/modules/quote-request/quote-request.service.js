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
exports.QuoteRequestService = void 0;
const common_1 = require("@nestjs/common");
const quote_request_repository_1 = require("./quote-request.repository");
let QuoteRequestService = class QuoteRequestService {
    constructor(quoteRequestRepository) {
        this.quoteRequestRepository = quoteRequestRepository;
    }
    async create(body) {
        return this.quoteRequestRepository.create(body);
    }
    async findAll(user) {
        return this.quoteRequestRepository.findAll();
    }
    async findOne(id, user) {
        const data = this.quoteRequestRepository.findOne(id);
        if (!data)
            throw new common_1.NotFoundException();
        return data;
    }
    async remove(id, user) {
        const data = await this.quoteRequestRepository.findOne(id);
        if (!data)
            throw new common_1.NotFoundException();
        await this.quoteRequestRepository.delete(id);
        return { result: 'OK' };
    }
};
exports.QuoteRequestService = QuoteRequestService;
exports.QuoteRequestService = QuoteRequestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [quote_request_repository_1.QuoteRequestRepository])
], QuoteRequestService);
//# sourceMappingURL=quote-request.service.js.map