import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import cookieSession from 'cookie-session';
import morgan from 'morgan';
import { router } from './loginRoutes';

const app = express();
const PORT = 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['yadda-yadda'] }));
app.use(morgan("dev"));
app.use(router);

app.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`);    
});
