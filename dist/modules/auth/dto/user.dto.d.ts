import { User } from '@prisma/client';
export declare class UserDto implements User {
    id: number;
    username: string;
    password: string;
}
