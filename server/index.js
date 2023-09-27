import express from 'express';
const app = express();
import knex from 'knex';
import {development} from './knexfile.js';
import dotenv from 'dotenv';

dotenv.config();
const db = knex(development);

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})