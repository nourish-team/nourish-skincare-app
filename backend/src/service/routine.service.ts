import routineModel from "../model/routine.model"
interface Routine {
    id: number,
    routine_name: string,
    skin_type: string,
    routine_product: string,
    public:boolean
}

export default {
    createRoutine(routineData: Routine) {
        let {id, routine_name: routineName, skin_type: skinType, routine_product: routineProduct, public: routinePublic} = routineData;
        routinePublic = Boolean(routinePublic)
        const parsedRoutine : number[] = JSON.parse(routineProduct)
        return routineModel.createRoutine(id, routineName, skinType, parsedRoutine, routinePublic);
    }
}