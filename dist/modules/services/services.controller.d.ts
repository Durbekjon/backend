import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { IUser } from '../auth/dto/user.interface';
import { ServiceType } from '@prisma/client';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(body: CreateServiceDto, user: IUser): Promise<import("./dto/service.dto").ServiceDto>;
    findAll(type?: ServiceType): Promise<import("./dto/service.dto").ServiceDto[]>;
    findOne(id: string): Promise<import("./dto/service.dto").ServiceDto>;
    update(id: string, body: UpdateServiceDto, user: IUser): Promise<import("./dto/service.dto").ServiceDto>;
    remove(id: string, user: IUser): Promise<{
        result: string;
    }>;
}
