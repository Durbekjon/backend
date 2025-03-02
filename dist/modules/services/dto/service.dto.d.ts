import { ServiceType } from "@prisma/client";
export declare class ServiceDto {
    id: number;
    title: string;
    imageUrl: string;
    description?: string;
    type: ServiceType;
}
