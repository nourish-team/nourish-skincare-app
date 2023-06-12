import likesModel from "../model/likes.model"
interface Like {
    users_id: string,
    routines_id: string,
    like: string
}

export default {
    createLike(likeData: Like) {
        const {users_id: userId, routines_id: routineId, like} = likeData;
        const parsedId = parseInt(userId, 10);
        const parsedRoutineId = parseInt(routineId, 10);
        const likeBoolean = Boolean(like);
        return likesModel.createLike(parsedId, parsedRoutineId, likeBoolean);
    }
}