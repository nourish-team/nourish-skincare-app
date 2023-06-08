import express, {Request, Response} from "express";
export default {
    async createLoginToken (req: Request, res: Response){
        try {
            const id:number = await 1;
            res.status(201).send(id)
        } catch (error) {
            console.log(error)
        }
    }
}