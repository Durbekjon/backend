import { CreateInformationDto } from './dto/create-information.dto';
import { UpdateInformationDto } from './dto/update-information.dto';
import { IUser } from '../auth/dto/user.interface';
import { InformationRepository } from './information.repository';
import { InformationDto } from './dto/information.dto';
export declare class InformationService {
    private readonly informationRepository;
    constructor(informationRepository: InformationRepository);
    create(body: CreateInformationDto, user: IUser): Promise<InformationDto>;
    find(): Promise<InformationDto>;
    update(id: number, body: UpdateInformationDto, user: IUser): Promise<InformationDto>;
    remove(id: number, user: IUser): Promise<{
        result: string;
    }>;
    private validateUser;
}
