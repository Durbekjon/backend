import { ConfigService } from '@nestjs/config';
import { SendContactFormMessageDto } from './dto/send-contact-form-message.dto';
export declare class MailService {
    private readonly configService;
    constructor(configService: ConfigService);
    private transporter;
    sendContactFormMessage(sendContactFormMessageDto: SendContactFormMessageDto): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
}
