import express, { Application, Router, urlencoded, Request, Response } from 'express';
import router from './api/routers';
import {dbInit} from './db/db-config';
import dotenv from 'dotenv';

dotenv.config();
const cors = require('cors');
const app = express();
let corsOptions = {
              origin: "*",
              methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
              preflightContinue: false,
              optionsSuccessStatus: 204
};

dbInit();

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use((req: Request, res: Response, next) => {
    const currentDate = new Date();
    console.log(`${currentDate}\nURL:\t${req.url}\nNew request:\t${req.method}\nIP:\t\t\t${req.ip}`);
    next();
});

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
    res.json({message: 'Where have you gone?'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})