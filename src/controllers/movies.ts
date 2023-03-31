import { Request, Response } from "express"
import { Movie } from "../interfaces/movie.interface";
import { insertMovie, getAllMovies } from "../services/movies";
import { handleHttp } from "../utils/error.handle"

const getMovie = (req: Request, res: Response) => {
    try {
        res.render('ok');
    } catch (e) {
        handleHttp(res,"ERROR_GET_Movie", e);
    }
}

const getMovies = async (req: Request, res: Response) => {
    try {
        const movies = await getAllMovies();
        res.send(movies);
    } catch (e) {
        handleHttp(res,"ERROR_GET_MovieS", e);
    }
}

const updateMovie = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res,"ERROR_UPDATE_Movie", e);
    }
}

const postMovie = async (req: Request, res: Response) => {
    try {
        console.log('req body')
        console.log(req.body);
        const movieId = await insertMovie(req.body as Movie);
        res.send(`Created Movie with id ${movieId}`);
    } catch (e) {
        handleHttp(res,"ERROR_POST_Movie",e);
    }
}

const deleteMovie = (req: Request, res: Response) => {
    try {
    } catch (e) {
        handleHttp(res,"ERROR_DELETE_Movie", e);
    }
}

export {getMovie, getMovies, updateMovie, postMovie, deleteMovie}