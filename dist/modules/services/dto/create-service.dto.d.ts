export declare enum ServiceType {
    EDU = "edu",
    TRAVEL = "travel"
}
export declare class CreateServiceDto {
    title: string;
    imageUrl: string;
    description?: string;
    type: ServiceType;
}
