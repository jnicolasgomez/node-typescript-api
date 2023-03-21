import {Schema, Types, model, Model} from 'mongoose';
import { Movie } from '../interfaces/movie.interface';

const ItemSchema = new Schema<Movie>(
    {
        title: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ItemModel = model("items", ItemSchema);
export default ItemModel;