import {prisma} from "../utils/db.server";

export default {
    async createJournalRoutine(routineId: number, usersId: number, comments:string | undefined, date:string, img_url:string | undefined) {
        const japanTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
        const newJournalEntrie = await prisma.journals.create({
            data: {
                user_id: {
                    connect: {id:usersId}
                },
                routine_id: {
                    connect: {id:routineId}
                },
                comments: comments,
                img_url: img_url,
                date: date,
                created_at: japanTime,
                updated_at: japanTime,
            },
            select: {
                users_id: true,
                routines_id: true,
                comments: true,
                date: true,
                img_url: true

            }
        })

        return newJournalEntrie;
    }
}

