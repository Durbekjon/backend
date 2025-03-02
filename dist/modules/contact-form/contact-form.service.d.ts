import { ContactFormRepository } from './contact-form.repository';
import { CreateContactFormDto } from './dto/create-contact-form.dto';
import { ConfigService } from '@nestjs/config';
import { MailService } from 'src/common/mail/mail.service';
import { IUser } from '../auth/dto/user.interface';
import { IContactForm } from './dto/IContact-form';
import { FindAllContactFormsResponseDto } from './dto/find-all.response.dto';
export declare class ContactFormService {
    private readonly contactFormRepository;
    private readonly configService;
    private readonly mailService;
    constructor(contactFormRepository: ContactFormRepository, configService: ConfigService, mailService: MailService);
    create(body: CreateContactFormDto): Promise<{
        result: string;
    }>;
    findAll(user: IUser): Promise<FindAllContactFormsResponseDto>;
    findOne(id: number, user: IUser): Promise<IContactForm | null>;
    remove(id: number, user: IUser): Promise<{
        result: string;
    }>;
    private validateUser;
}
