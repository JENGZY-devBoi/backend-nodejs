import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { Configs } from './Common/config';

const API_PATH = Configs.api.basePathUrl ?? '';

import { UserRoutes } from './Routes';

const app: Express = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['*'],
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());


app.use(`${API_PATH}/user`, UserRoutes);


export default app;