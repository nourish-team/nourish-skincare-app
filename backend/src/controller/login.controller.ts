import express, {Request, Response} from "express";

import loginService from "../service/login.service";

export default {
    async updateAccessTokenLogin (req: Request, res: Response){
        try {
            const paramsId = req.params.id
            const userId = parseInt(paramsId)
            const newAccessToken = await loginService.updateAccessTokenLogin(userId, req.body);
            res.status(200).send(newAccessToken);
        } catch (error) {
            res.status(304).send("NOT MODEFIED");
        }
    }
}