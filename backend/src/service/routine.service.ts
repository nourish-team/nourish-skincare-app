import routineModel from "../model/routine.model"
interface Routine {
    user_id: string,
    routine_name: string,
    skin_type: string,
    routine_product: string,
    public:boolean
}

export default {
    createRoutine(routineData: Routine) {
        let {user_id: id, routine_name: routineName, skin_type: skinType, routine_product: routineProduct, public: routinePublic} = routineData;
        routinePublic = Boolean(routinePublic);
        const parsedRoutine : number[] = JSON.parse(routineProduct);
        const parsedId: number = parseInt(id, 10);
        console.log(id);
        return routineModel.createRoutine(parsedId, routineName, skinType, parsedRoutine, routinePublic);
    }
}