import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class VisitService {
    private prisma;
    constructor(prisma: PrismaService);
    addVisit(): Promise<{
        id: number;
        count: number;
        date: Date;
        visits: Date[];
    }>;
    getVisits(): Promise<{
        id: number;
        count: number;
        date: Date;
        visits: Date[];
    }[]>;
    clearFullVisits(): Promise<{
        result: string;
    }>;
}
