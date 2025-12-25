import express from "express";
import connectDB from "./dbs/connectDB.js";
import dotenv from "dotenv";
import cors from "cors";
// import { createDoc } from './controllers/createDoc.js'
import resultsRouter from "./routes/results.js";
import insertRouteRouter from './routes/insertRoute.js';
import deleteRouteRouter from './routes/deleteRoute.js';

dotenv.config({ quiet: true });
const app = express();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json());

connectDB(DATABASE_URL);
// createDoc();

app.use('/api', resultsRouter);
app.use('/api', insertRouteRouter);
app.use('/api', deleteRouteRouter);

app.get('/', (req, res) => {
    res.send("Server is running! - check /api/results for data.")
});


app.listen(PORT, () => console.log(`Server listening on Port: ${PORT}`));
