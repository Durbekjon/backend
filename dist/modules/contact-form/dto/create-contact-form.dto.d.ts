import { SubjectType } from '@prisma/client';
export declare class CreateContactFormDto {
    subject?: SubjectType;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}
