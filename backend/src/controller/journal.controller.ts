import express, {Request, Response} from "express";
import journalService from "../service/journal.service";

export default {
    async createJournalRoutine(req: Request, res: Response) {
        try {
            const newJournalEntrie = await journalService.createJournalRoutine(req.body);
            res.status(201).send(newJournalEntrie);
            
        } catch (error:any) {
            console.error(error);
            res.status(400).send("Not able to make post")
        }
        
    }
}