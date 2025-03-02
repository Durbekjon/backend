import { ContactFormService } from './contact-form.service';
import { CreateContactFormDto } from './dto/create-contact-form.dto';
import { IUser } from '../auth/dto/user.interface';
export declare class ContactFormController {
    private readonly contactFormService;
    constructor(contactFormService: ContactFormService);
    create(body: CreateContactFormDto): Promise<{
        result: string;
    }>;
    findAll(user: IUser): Promise<import("./dto/find-all.response.dto").FindAllContactFormsResponseDto>;
    findOne(id: string, user: IUser): Promise<import("./dto/IContact-form").IContactForm>;
    remove(id: string, user: IUser): Promise<{
        result: string;
    }>;
}
