import { Request, Response, Router } from "express";
import { deleteMovie, getMovie, getMovies, postMovie, updateMovie } from "../controllers/movies";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', postMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

export{ router }