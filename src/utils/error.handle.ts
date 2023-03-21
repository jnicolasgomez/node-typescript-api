import { response, Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw: any, status: number = 500) => {
    console.log(errorRaw);
    res.status(status);
    res.send({ error , message: errorRaw.message});
}

export { handleHttp };