import { Movie } from "../interfaces/movie.interface";
import ItemModel from "../models/item"
import { getMovies, createMovie } from "../models/movie";

const localMovies: Movie[] = [];
const insertMovie = async (movie: Movie) => {
    // const responseInsert = await ItemModel.create(movie);
    const result = await createMovie(movie);
    if (!result) {
        throw new Error('Error creating Movie');
    }
    // localMovies.push(movie);
    return result;
}

const getAllMovies = async () => {
    // const responseInsert = await ItemModel.create(movie);
    const movies = await getMovies();
    return movies;
}

export {insertMovie, getAllMovies};