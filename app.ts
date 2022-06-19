import express, { NextFunction } from 'express';
import { router } from './src/routes'
import bodyParser from 'body-parser'
import { ErrorHandler } from './Utils/ErrorHandler'

export const app = express();

app.use(bodyParser.json())
app.use('/', router)

app.use(async (error, req, res, next ) => {
    await ErrorHandler.handleError(error, res)
});

