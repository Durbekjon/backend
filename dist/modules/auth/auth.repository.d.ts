import { PrismaService } from 'src/common/prisma/prisma.service';
import { UserDto } from './dto/user.dto';
export declare class AuthRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findByUsername(username: string): Promise<UserDto>;
    findById(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        username: string;
        password: string;
        id: number;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    createuser(data: {
        username: string;
        password: string;
    }): Promise<{
        username: string;
        password: string;
        id: number;
    }>;
}
