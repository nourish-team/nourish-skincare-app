import routineModel from "../model/routine.model"
interface Routine {
    user_id: number,
    routine_name: string,
    skin_type: string,
    routine_product: number[],
    public:boolean
}

interface UpdateRoutine {
    routine_id: string,
    routine_product: string | undefined,
    public: string 
}

export default {
    createRoutine(routineData: Routine) {
        let {user_id: id, routine_name: routineName, skin_type: skinType, routine_product: routineProduct, public: routinePublic} = routineData;
        // routinePublic = Boolean(routinePublic);
        // const parsedRoutine : number[] = JSON.parse(routineProduct);
        // const parsedId: number = parseInt(id, 10);
        // console.log(id);
        return routineModel.createRoutine(id, routineName, skinType, routineProduct, routinePublic);
    },

    getRoutineBySkintype(skintype:string) {
        return routineModel.getRoutineBySkintype(skintype)
    },

    getRoutineByUserId(userId:string) {
        const parsedId: number = parseInt(userId, 10);
        return routineModel.getRoutineByUserId(parsedId);
    }, 

    updateRoutineUser(updateData: UpdateRoutine) {
        const {routine_id: routineId, routine_product: routineProduct, public: routinePublic} = updateData;
        const parsedRoutineId: number = parseInt(routineId, 10);
        let parsedRoutine: number[] | undefined; 

        if(routineProduct) {
          parsedRoutine  = JSON.parse(routineProduct);
        } else {
         parsedRoutine = undefined;
        }
        
        let routinePublicBoolean: boolean | undefined;
        console.log("outside the if", routinePublic)
        if(routinePublic === "true") {
            routinePublicBoolean = Boolean(routinePublic);
            
        } else if (routinePublic === "false") {
            routinePublicBoolean = false;
        } else {
            routinePublicBoolean = undefined;
        }

        
        return routineModel.updateRoutineUser(parsedRoutineId, parsedRoutine, routinePublicBoolean);
    }

}