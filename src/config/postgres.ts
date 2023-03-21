import { Client } from 'pg'

const connectionData = {
    user: process.env.APP_ENV_PG_USER,
    host: '',
    database: process.env.APP_ENV_PG_DATABASE,
    password: process.env.APP_ENV_PG_PASSWORD,
    port: process.env.APP_ENV_PG_PORT as unknown as number
  }

async function dbConnect(): Promise<Client> {
    const client = new Client(connectionData);
    await client.connect();
    return client;
}

export default dbConnect;