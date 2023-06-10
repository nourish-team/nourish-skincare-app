import express, {Request, Response} from "express";
import modelSignup from "../model/signup.model"

interface SignupData {
    username: string,
    email: string,
    access_token: string,
    uid: string
}

export default  {
    createUser(userdata: SignupData) {
        console.log(userdata)
        const {username, email, access_token, uid}: {username:string, email:string, access_token:string, uid:string} = userdata;
        return modelSignup.createUser(username, email, access_token, uid);
    }
}