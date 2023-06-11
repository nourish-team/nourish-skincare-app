import {prisma} from "../utils/db.server"



export default {
    async createRoutine(id:number, routineName: string, skinType:string, routineProduct:number[], routinePublic:boolean) {
        const japanTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
        const routineData = await prisma.routines.create({
            data: {
               user_id: {
                connect: {id:id}
               },
               routine_name: routineName,
               skin_type: skinType, 
               routine_product: routineProduct,
               public: routinePublic,
               updated_at: japanTime,
               created_at: japanTime,
              
            },
            select: {
              routine_name: true,
              skin_type: true,
              routine_product: true,
              public: true
            }
        })
        return routineData;
    }
}