import { PrismaService } from 'src/common/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from '../dto/jwt-payload.dto';
declare const RtStrategy_base: new (...args: any) => any;
export declare class RtStrategy extends RtStrategy_base {
    private readonly prismaService;
    private readonly configService;
    constructor(prismaService: PrismaService, configService: ConfigService);
    validate(payload: JwtPayload): Promise<{
        id: number;
    }>;
}
export {};
