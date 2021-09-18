"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        return next();
        return;
    }
    else {
        res.status(403).send("\n            <h1>Authentication required.</h1>\n            <a href=\"/login\">Login</a>\n        ");
    }
}
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n        <form method=\"POST\">\n            <div>\n                <label>Email</label>\n                <input name=\"email\" type=\"text\" />                \n            </div>\n            <div>\n                <label>Password</label>\n                <input name=\"password\" type=\"password\" />                \n            </div>\n            <button>Submit</button>\n        </form>\n    ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === '1234') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send("\n            <h1>Invalid email of password</h1>\n            <div>\n                <a href=\"/login\">Login</a>            </div>\n        ");
    }
});
router.get('/', function (req, res) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.status(200).send("\n            <h1>Index Route</h1>\n            <div>\n                <div>You are logged in!</div>\n                <a href=\"/logout\">Logout</a>\n                <a href=\"/protected\">Protected</a>\n            </div>\n        ");
    }
    else {
        res.status(302).send("\n            <h1>You must log in!</h1>\n            <div>\n                <a href=\"/login\">Login</a>            </div>\n        ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send("\n        <div>\n        <h1>Protected Route</h1>\n        <div>Protected information</div>\n        <div>\n            <a href=\"/\">Home</a>\n            <a href=\"/protected\">Protected</a>\n            <a href=\"/logout\">Logout</a>\n        </div>\n        </div>\n    ");
});
