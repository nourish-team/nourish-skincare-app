import loginModel from "../model/login.model";

type Token = {
    access_token: string
}

export default  {
    updateAccessTokenLogin(userId:number, body: Token) {
        const {access_token: token} = body;
        return loginModel.updateAccessTokenLogin(userId, token);
    }
}