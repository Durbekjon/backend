import { QuoteType, RequestType } from '@prisma/client';
export declare class CreateQuoteRequestDto {
    name: string;
    email: string;
    phoneNumber?: string;
    message: string;
    quoteType: QuoteType;
    requestType: RequestType;
}
