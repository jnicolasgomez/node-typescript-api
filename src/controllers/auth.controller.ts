import { Request, Response } from "express";
import { Auth } from "../interfaces/auth.interface";
import { registerService } from "../services/authFirebase.service";
import { handleHttp } from "../utils/error.handle";

const registerController = async (req: Request, res: Response) => {
    try {
        let user: Auth;
        if (req.body.email && req.body.password) {
            user = {
                email: req.body.email,
                password: req.body.password
            };
            const response = await registerService(user);
            res.send(response);
        } else {
            res.status(400);
            res.send("INVALID_BODY");
        }
    } catch (e) {
        handleHttp(res,"ERROR_SIGNUP_USER", e);
    };
}


export { registerController }