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
exports.RootController = void 0;
var decorators_1 = require("./decorators");
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        return next();
        return;
    }
    else {
        res.status(403).send("\n            <h1>Authentication required.</h1>\n            <a href=\"/auth/login\">Login</a>\n        ");
    }
}
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        var _a;
        if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
            res.status(200).send("\n                <h1>Index Route</h1>\n                <div>\n                    <div>You are logged in!</div>\n                    <a href=\"/auth/logout\">Logout</a>\n                    <a href=\"/protected\">Protected</a>\n                </div>\n            ");
        }
        else {
            res.status(302).send("\n                <h1>You must log in!</h1>\n                <div>\n                    <a href=\"/auth/login\">Login</a>                </div>\n            ");
        }
    };
    RootController.prototype.getProtected = function (req, res) {
        res.send("\n            <div>\n            <h1>Protected Route</h1>\n            <div>Protected information</div>\n            <div>\n                <a href=\"/\">Home</a>\n                <a href=\"/protected\">Protected</a>\n                <a href=\"/auth/logout\">Logout</a>\n            </div>\n            </div>\n        ");
    };
    __decorate([
        decorators_1.get('/'),
        decorators_1.use(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        decorators_1.get('/protected'),
        decorators_1.use(requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        decorators_1.controller('')
    ], RootController);
    return RootController;
}());
exports.RootController = RootController;
