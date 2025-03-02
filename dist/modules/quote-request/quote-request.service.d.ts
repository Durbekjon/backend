import { CreateQuoteRequestDto } from './dto/create-quote-request.dto';
import { QuoteRequest } from '@prisma/client';
import { QuoteRequestRepository } from './quote-request.repository';
import { IUser } from '../auth/dto/user.interface';
export declare class QuoteRequestService {
    private readonly quoteRequestRepository;
    constructor(quoteRequestRepository: QuoteRequestRepository);
    create(body: CreateQuoteRequestDto): Promise<QuoteRequest>;
    findAll(user: IUser): Promise<{
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
    findOne(id: number, user: IUser): Promise<QuoteRequest>;
    remove(id: number, user: IUser): Promise<{
        result: string;
    }>;
}
