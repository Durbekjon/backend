import { VisitService } from './visit.service';
export declare class VisitController {
    private readonly visitService;
    constructor(visitService: VisitService);
    add(): Promise<{
        id: number;
        count: number;
        date: Date;
        visits: Date[];
    }>;
    cleanVisits(): Promise<{
        result: string;
    }>;
    getVisits(): Promise<{
        id: number;
        count: number;
        date: Date;
        visits: Date[];
    }[]>;
}
