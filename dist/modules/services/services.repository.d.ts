import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ServiceType, User } from '@prisma/client';
import { ServiceDto } from './dto/service.dto';
export declare class ServicesRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createService(body: CreateServiceDto): Promise<ServiceDto>;
    getAllServices(type?: ServiceType): Promise<ServiceDto[]>;
    getServiceById(id: number): Promise<ServiceDto>;
    updateService(id: number, body: UpdateServiceDto): Promise<ServiceDto>;
    deleteService(id: number): Promise<void>;
    getUserById(id: number): Promise<User>;
}
