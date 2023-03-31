import dbConnect from "../config/postgres"
import { Movie } from "../interfaces/movie.interface";



export async function getMovies() {
  const client = dbConnect();
  try {
    const result = await (await client).query('SELECT * FROM movies');
    return result.rows as Movie[];
  } catch (err) {
    console.error('Error getting movie:', (err as unknown as Error).stack);
  } finally {
    (await client).end();
  }
  (await client).end();
}

export async function createMovie(movie: Movie) {
  const client = dbConnect();
  const query = {
    text: 'INSERT INTO movies (title, year, description, score) VALUES ($1, $2, $3, $4) RETURNING id',
    values: [movie.title, movie.year, movie.description, movie.score],
  };

  try {
    const result = await (await client).query(query);
    console.log(`Created movie with ID: ${result.rows[0].id}`);
    return result.rows[0].id;
  } catch (err) {
    console.error('Error creating movie:', (err as unknown as Error).stack);
  } finally {
    (await client).end();
  }
}

