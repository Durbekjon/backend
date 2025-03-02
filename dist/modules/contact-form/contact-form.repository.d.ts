import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateContactFormDto } from './dto/create-contact-form.dto';
import { IContactForm } from './dto/IContact-form';
import { SubjectType } from '@prisma/client';
export declare class ContactFormRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(body: CreateContactFormDto): Promise<IContactForm>;
    findAll(): Promise<IContactForm[]>;
    getCount(type: SubjectType): Promise<number>;
    findOne(id: number): Promise<IContactForm | null>;
    delete(id: number): Promise<void>;
    getUserById(id: number): Promise<{
        username: string;
        password: string;
        id: number;
    }>;
}
