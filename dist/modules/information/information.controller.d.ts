import { InformationService } from './information.service';
import { CreateInformationDto } from './dto/create-information.dto';
import { UpdateInformationDto } from './dto/update-information.dto';
import { IUser } from '../auth/dto/user.interface';
export declare class InformationController {
    private readonly informationService;
    constructor(informationService: InformationService);
    create(body: CreateInformationDto, user: IUser): Promise<import("./dto/information.dto").InformationDto>;
    find(): Promise<import("./dto/information.dto").InformationDto>;
    update(id: string, body: UpdateInformationDto, user: IUser): Promise<import("./dto/information.dto").InformationDto>;
    remove(id: string, user: IUser): Promise<{
        result: string;
    }>;
}
