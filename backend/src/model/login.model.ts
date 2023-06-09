import {prisma} from "../utils/db.server"


export default {
    async updateAccessTokenLogin(userId:number, token:string) {
        const japanTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
        const updateToken = await prisma.users.update({
            where: {
                id: userId,
            }, 
            data: {
                updated_at: japanTime,
            },
            select: {
                id: true,
                username: true,
            }
        })
        return updateToken;
    }
}