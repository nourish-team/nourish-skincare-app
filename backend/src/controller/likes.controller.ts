import express, {Request, Response} from "express";
import likesService from "../service/likes.service";

export default {
    async createLike(req: Request, res: Response) {
        try {
            const newLikeData = await likesService.createLike(req.body);
            res.status(201).send(newLikeData);
        } catch (error) {
            console.error(error);
            res.status(400).send("Can't create like in database");
        }
       

    }
}