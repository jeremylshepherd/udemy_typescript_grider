/* Original un-refactored route logic */

import express, { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
  }

function requireAuth(req: Request, res: Response, next: NextFunction): void {
    if (req.session?.loggedIn) {
        return next();
        return;
    } else {
        res.status(403).send(`
            <h1>Authentication required.</h1>
            <a href="/login">Login</a>
        `);
    }
}

const router = Router();
router.get('/login', (req: Request, res: Response) => {
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
});

router.post('/login', (req: RequestWithBody, res: Response) => {    
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === '1234') {
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
});

router.get('/', (req: Request, res: Response) => {
    if (req.session?.loggedIn) {
        res.status(200).send(`
            <h1>Index Route</h1>
            <div>
                <div>You are logged in!</div>
                <a href="/logout">Logout</a>
                <a href="/protected">Protected</a>
            </div>
        `);
    } else {
        res.status(302).send(`
            <h1>You must log in!</h1>
            <div>
                <a href="/login">Login</a>\
            </div>
        `);
    }
});

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
    res.send(`
        <div>
        <h1>Protected Route</h1>
        <div>Protected information</div>
        <div>
            <a href="/">Home</a>
            <a href="/protected">Protected</a>
            <a href="/logout">Logout</a>
        </div>
        </div>
    `);
})

export { router };

