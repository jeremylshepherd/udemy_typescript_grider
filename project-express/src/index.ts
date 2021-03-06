import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';
import morgan from 'morgan';
import './controllers/LoginController';
import './controllers/RootController';
import { AppRouter } from './AppRouter';

const app = express();
const PORT = 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['yadda-yadda'] }));
app.use(morgan("dev"));
app.use(AppRouter.getInstance());


app.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`);    
});
