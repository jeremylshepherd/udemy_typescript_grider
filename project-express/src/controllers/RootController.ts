import express, { NextFunction, Request, Response } from 'express';
import { get, controller, use, validateBody, post } from './decorators';

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session?.loggedIn) {
        return next();
        return;
    } else {
        res.status(403).send(`
            <h1>Authentication required.</h1>
            <a href="/auth/login">Login</a>
        `);
    }
}

@controller('')
export class RootController {
    @get('/')
    @use(requireAuth)
    getRoot(req: Request, res: Response) {
        if (req.session?.loggedIn) {
            res.status(200).send(`
                <h1>Index Route</h1>
                <div>
                    <div>You are logged in!</div>
                    <a href="/auth/logout">Logout</a>
                    <a href="/protected">Protected</a>
                </div>
            `);
        } else {
            res.status(302).send(`
                <h1>You must log in!</h1>
                <div>
                    <a href="/auth/login">Login</a>\
                </div>
            `);
        }
    }

    @get('/protected')
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send(`
            <div>
            <h1>Protected Route</h1>
            <div>Protected information</div>
            <div>
                <a href="/">Home</a>
                <a href="/protected">Protected</a>
                <a href="/auth/logout">Logout</a>
            </div>
            </div>
        `);
    }
}