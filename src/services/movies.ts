import { Movie } from "../interfaces/movie.interface";
import ItemModel from "../models/item"
import { selectTable } from "../models/movie";

const localMovies: Movie[] = [];
const insertMovie = async (movie: Movie) => {
    // const responseInsert = await ItemModel.create(movie);
    localMovies.push(movie);
    return localMovies;
}

const getAllMovies = async () => {
    // const responseInsert = await ItemModel.create(movie);
    await selectTable();
    return localMovies;
}

export {insertMovie, getAllMovies};