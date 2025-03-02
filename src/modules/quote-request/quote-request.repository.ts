import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { QuoteRequest, QuoteType, RequestType } from '@prisma/client';
import { CreateQuoteRequestDto } from './dto/create-quote-request.dto';
import { MailService } from '../../common/mail/mail.service';
import { SendContactFormMessageDto } from 'src/common/mail/dto/send-contact-form-message.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QuoteRequestRepository {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly mailService: MailService,
    private readonly configService: ConfigService,
  ) {}

  async create(body: CreateQuoteRequestDto): Promise<QuoteRequest> {
    const data: SendContactFormMessageDto = {
      firstName: body.name,
      from: body.email,
      to: await this.configService.get(body.quoteType + '_MAIL'),
      subject: body.requestType,
      message: body.message,
      createdAt: new Date(),
    };
    await this.mailService.sendContactFormMessage(data);
    return this.prismaService.quoteRequest.create({ data: body });
  }

  async findAll() {
    const [
      edu,
      travel,
      quoteRequests,
      degreePrograms,
      fullVipAssistance,
      groundTransportation,
      internships,
      meetAndGreet,
      shortTermPrograms,
      teacherTrainings,
      tourPackage,
    ] = await Promise.all([
      this.countQuoteType(QuoteType.EDU),
      this.countQuoteType(QuoteType.TRAVEL),
      this.prismaService.quoteRequest.findMany(), // Consider adding filters or pagination
      this.countRequestType(RequestType.DEGREE_PROGRAMS),
      this.countRequestType(RequestType.FULL_VIP_ASSISTANCE),
      this.countRequestType(RequestType.GROUND_TRANSPORTATION),
      this.countRequestType(RequestType.INTERNSHIPS),
      this.countRequestType(RequestType.MEET_AND_GREET_FAST_TRACK),
      this.countRequestType(RequestType.SHORT_TERM_PROGRAMS),
      this.countRequestType(RequestType.TEACHER_TRAININGS),
      this.countRequestType(RequestType.TOUR_PACKAGE),
    ]);

    return {
      edu,
      travel,
      quoteRequests, // Renamed for clarity
      requestCounts: {
        degreePrograms,
        fullVipAssistance,
        groundTransportation,
        internships,
        meetAndGreet,
        shortTermPrograms,
        teacherTrainings,
        tourPackage,
      },
    };
  }

  async countQuoteType(quoteType: QuoteType): Promise<number> {
    return this.prismaService.quoteRequest.count({
      where: { quoteType: quoteType },
    });
  }
  async countRequestType(requestType: RequestType): Promise<number> {
    return this.prismaService.quoteRequest.count({
      where: { requestType: requestType },
    });
  }

  async findOne(id: number): Promise<QuoteRequest> {
    return this.prismaService.quoteRequest.findUnique({
      where: { id },
    });
  }

  async delete(id: number): Promise<QuoteRequest> {
    return this.prismaService.quoteRequest.delete({ where: { id } });
  }
}
