import {prisma} from "../utils/db.server";

export default {
    async createLike(parsedId: number, parsedRoutineId: number, likeBoolean: boolean){
        const japanTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
        const newLikeData = await prisma.likes.create({
            data: {
                user_id: {
                    connect: {id: parsedId}
                },
                routine_id: {
                    connect: {id: parsedRoutineId}
                },
                like: likeBoolean,
                updated_at: japanTime,
                created_at: japanTime
            },
            select: {
                users_id: true,
                routines_id: true,
                like: true
            }
        })

        return newLikeData;
    }
}