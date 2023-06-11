import express, {Request, Response} from "express";
import routineService from  "../service/routine.service";

export default {
    async createRoutine(req: Request, res: Response) {
        try {
            const routineData = await routineService.createRoutine(req.body);
            res.status(200).send(routineData);
        } catch (error: any) {
            console.log(error);
            res.status(400)
        }
    }
}