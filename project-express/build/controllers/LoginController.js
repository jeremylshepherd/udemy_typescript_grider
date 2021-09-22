"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
var decorators_1 = require("./decorators");
function logger(req, res, next) {
    console.log('\x1b[36m%s\x1b[0m', req.method + " " + req.path + " " + res.statusCode);
    next();
}
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res) {
        res.send("\n            <form method=\"POST\">\n                <div>\n                    <label>Email</label>\n                    <input name=\"email\" type=\"text\" />                \n                </div>\n                <div>\n                    <label>Password</label>\n                    <input name=\"password\" type=\"password\" />                \n                </div>\n                <button>Submit</button>\n            </form>\n        ");
    };
    LoginController.prototype.postlogin = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email === 'hi@hi.com' && password === '1234') {
            req.session = { loggedIn: true };
            res.redirect('/');
        }
        else {
            res.send("\n                <h1>Invalid email or password</h1>\n                <div>\n                    <a href=\"/login\">Login</a>                </div>\n            ");
        }
    };
    LoginController.prototype.getLogout = function (req, res) {
        req.session = undefined;
        res.redirect('/');
    };
    __decorate([
        decorators_1.get('/login'),
        decorators_1.use(logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        decorators_1.post('/login'),
        decorators_1.validateBody('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postlogin", null);
    __decorate([
        decorators_1.get('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogout", null);
    LoginController = __decorate([
        decorators_1.controller('/auth')
    ], LoginController);
    return LoginController;
}()); //End of class
exports.LoginController = LoginController;
