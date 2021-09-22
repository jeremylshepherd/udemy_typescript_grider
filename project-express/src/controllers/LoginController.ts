import express, { NextFunction, Request, Response } from 'express';
import { get, controller, use, validateBody, post } from './decorators';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
  }

function logger(req: Request, res: Response, next: NextFunction) {
    console.log('\x1b[36m%s\x1b[0m', `${req.method} ${req.path} ${res.statusCode}`);
    next();
}

@controller('/auth')
export class LoginController {
    @get('/login')
    @use(logger)
    getLogin(req: Request, res: Response): void {
        res.send(`
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email" type="text" />                
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />                
                </div>
                <button>Submit</button>
            </form>
        `);
    }

    @post('/login')
    @validateBody('email', 'password')
    postlogin(req: RequestWithBody, res: Response) {    
        const { email, password } = req.body;
        if (email === 'hi@hi.com' && password === '1234') {
            req.session = { loggedIn: true };
            res.redirect('/');
        } else {
            res.send(`
                <h1>Invalid email or password</h1>
                <div>
                    <a href="/login">Login</a>\
                </div>
            `);
        }
    }

    @get('/logout')
    getLogout(req: Request, res: Response) {
        req.session = undefined;
        res.redirect('/');
    }

}//End of class


