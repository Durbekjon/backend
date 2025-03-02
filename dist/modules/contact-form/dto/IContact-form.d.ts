import { SubjectType } from '@prisma/client';
export declare class IContactForm {
    id: number;
    subject?: SubjectType;
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    createdAt: Date;
}
