import { Request, Response } from "express"
import { insertItem } from "../services/item";
import { handleHttp } from "../utils/error.handle"

const getItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res,"ERROR_GET_ITEM", e);
    }
}

const getItems = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res,"ERROR_GET_ITEMS", e);
    }
}

const updateItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res,"ERROR_UPDATE_ITEM", e);
    }
}

const postItem = async ({body}: Request, res: Response) => {
    try {
        const responseInsert = await insertItem(body);
        res.send(responseInsert);
    } catch (e) {
        handleHttp(res,"ERROR_POST_ITEM",e);
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res,"ERROR_DELETE_ITEM", e);
    }
}

export {getItem, getItems, updateItem, postItem, deleteItem}