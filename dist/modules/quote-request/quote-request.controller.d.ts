import { QuoteRequestService } from './quote-request.service';
import { CreateQuoteRequestDto } from './dto/create-quote-request.dto';
import { IUser } from '../auth/dto/user.interface';
export declare class QuoteRequestController {
    private readonly quoteRequestService;
    constructor(quoteRequestService: QuoteRequestService);
    create(body: CreateQuoteRequestDto): Promise<{
        name: string;
        id: number;
        phoneNumber: string | null;
        message: string;
        createdAt: Date;
        email: string;
        quoteType: import(".prisma/client").$Enums.QuoteType;
        requestType: import(".prisma/client").$Enums.RequestType;
        updatedAt: Date;
    }>;
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
    findOne(id: string, user: IUser): Promise<{
        name: string;
        id: number;
        phoneNumber: string | null;
        message: string;
        createdAt: Date;
        email: string;
        quoteType: import(".prisma/client").$Enums.QuoteType;
        requestType: import(".prisma/client").$Enums.RequestType;
        updatedAt: Date;
    }>;
    remove(id: string, user: IUser): Promise<{
        result: string;
    }>;
}
