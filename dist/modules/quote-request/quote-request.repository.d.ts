import { PrismaService } from '../../common/prisma/prisma.service';
import { QuoteRequest, QuoteType, RequestType } from '@prisma/client';
import { CreateQuoteRequestDto } from './dto/create-quote-request.dto';
import { MailService } from '../../common/mail/mail.service';
import { ConfigService } from '@nestjs/config';
export declare class QuoteRequestRepository {
    private readonly prismaService;
    private readonly mailService;
    private readonly configService;
    constructor(prismaService: PrismaService, mailService: MailService, configService: ConfigService);
    create(body: CreateQuoteRequestDto): Promise<QuoteRequest>;
    findAll(): Promise<{
        edu: number;
        travel: number;
        quoteRequests: {
            name: string;
            id: number;
            phoneNumber: string | null;
            message: string;
            createdAt: Date;
            email: string;
            quoteType: import(".prisma/client").$Enums.QuoteType;
            requestType: import(".prisma/client").$Enums.RequestType;
            updatedAt: Date;
        }[];
        requestCounts: {
            degreePrograms: number;
            fullVipAssistance: number;
            groundTransportation: number;
            internships: number;
            meetAndGreet: number;
            shortTermPrograms: number;
            teacherTrainings: number;
            tourPackage: number;
        };
    }>;
    countQuoteType(quoteType: QuoteType): Promise<number>;
    countRequestType(requestType: RequestType): Promise<number>;
    findOne(id: number): Promise<QuoteRequest>;
    delete(id: number): Promise<QuoteRequest>;
}
