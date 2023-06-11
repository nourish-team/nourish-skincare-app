import journalModel from "../model/journal.model";

interface Journal {
    routines_id: string,
    users_id: string,
    comments: string | undefined,
    date: string,
    img_url: string | undefined
}

export default {
    createJournalRoutine(journalData: Journal) {
        let {routines_id: routineId, users_id: usersId, comments, date, img_url} = journalData;
        const parsedRoutineId = parseInt(routineId, 10);
        const parsedUserId = parseInt(usersId, 10)
        return journalModel.createJournalRoutine(parsedRoutineId, parsedUserId, comments, date, img_url);
    }
}