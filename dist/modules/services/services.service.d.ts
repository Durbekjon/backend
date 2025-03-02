import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { IUser } from '../auth/dto/user.interface';
import { ServicesRepository } from './services.repository';
import { ServiceType } from '@prisma/client';
export declare class ServicesService {
    private readonly servicesRepository;
    constructor(servicesRepository: ServicesRepository);
    create(body: CreateServiceDto, user: IUser): Promise<import("./dto/service.dto").ServiceDto>;
    findAll(type?: ServiceType): Promise<import("./dto/service.dto").ServiceDto[]>;
    findOne(id: number): Promise<import("./dto/service.dto").ServiceDto>;
    update(id: number, body: UpdateServiceDto, user: IUser): Promise<import("./dto/service.dto").ServiceDto>;
    remove(id: number, user: IUser): Promise<{
        result: string;
    }>;
    private validateUser;
}
