import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item"

const insertItem = async (item:Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}

export {insertItem};