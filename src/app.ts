import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes/"
import dbConnect from "./config/postgres"
import bodyParser from "body-parser"
import admin, { ServiceAccount } from "firebase-admin"
import * as credentials from "../serviceAccountKey.json";

admin.initializeApp({
    credential: admin.credential.cert(credentials as ServiceAccount)
})

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors({}));
app.use(bodyParser.json());
app.use(router);
dbConnect().then(() => console.log("connection ready"));
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));