import { NextFunction, Request, Response } from "express";
import { verifySessionToken } from "../services/authFirebase.service";
import { handleHttp } from "../utils/error.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || null;
        const jwt = jwtByUser?.split(' ').pop();
        if (jwt) {
            verifySessionToken(jwt).then(function (decodedToken) {
                return next();
            })
            .catch((e) => {
                handleHttp(res, "INVALID_SESSION", e, 403);
            });
        }
    }catch (e) {
        handleHttp(res, "INVALID_SESSION", e, 400);
    }
}

export { checkJwt };