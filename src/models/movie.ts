import dbConnect from "../config/postgres"
import { Movie } from "../interfaces/movie.interface";



export async function getMovies() {
  const client = dbConnect();
  try {
    const result = await (await client).query('SELECT * FROM concerts');
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
    text: 'INSERT INTO concerts (Artista, Nombre, Año, Lugar, Latitud, Longitud, coordinates) VALUES ($1, $2, $3, $4,$5,$6, $7) RETURNING id',
    values: [movie.Artista, movie.Nombre, movie.Año, movie.Lugar, movie.Latitud, movie.Longitud, [movie.Latitud, movie.Longitud]],
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

