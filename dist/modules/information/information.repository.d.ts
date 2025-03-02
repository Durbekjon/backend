import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateInformationDto } from './dto/create-information.dto';
import { InformationDto } from './dto/information.dto';
export declare class InformationRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(data: CreateInformationDto): Promise<InformationDto>;
    findOne(): Promise<InformationDto | null>;
    update(id: number, data: Partial<CreateInformationDto>): Promise<InformationDto>;
    delete(id: number): Promise<void>;
    getUserById(id: number): Promise<{
        username: string;
        password: string;
        id: number;
    }>;
}
