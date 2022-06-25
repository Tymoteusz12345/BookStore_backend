import express, { json } from "express";
import cors from "cors";
import 'express-async-errors';
import { handleError } from "./utills/errors";


const app = express();

app
    .use(cors({
        origin: 'http://localhost:3001',
        methods: ['GET', 'POST'],
    }))
    .use(json())
    .use('/', (req, res) => {
        res.send('OK!')
    })
    .use(handleError)
    .listen(3003, '0.0.0.0', () => {
        console.log('Listening on port http://localhost:3003')
    })