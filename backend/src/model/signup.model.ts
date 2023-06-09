import { PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

type User = {
    id: number;
}

export default {
    async createUser(username: string, email:string, token:string, uid:string): Promise<User> {
        const userInfo = await prisma.users.create({
            data: {
                username: username,
                email: email,
                access_token: token,
                uid: uid,
                updated_at: new Date (),
                created_at: new Date (),
            },
            select: {
                id: true,
                username: true,
            }
        })
        return userInfo;
    }
}