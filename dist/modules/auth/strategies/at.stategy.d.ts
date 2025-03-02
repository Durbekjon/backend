import { PrismaService } from 'src/common/prisma/prisma.service';
import { JwtPayload } from '../dto/jwt-payload.dto';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly prismaService;
    private readonly configService;
    constructor(prismaService: PrismaService, configService: ConfigService);
    validate(payload: JwtPayload): Promise<{
        id: number;
    }>;
}
export {};
