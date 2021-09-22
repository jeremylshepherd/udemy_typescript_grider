"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("../decorators/MetadataKeys");
function bodyValidator(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send('Invalid request');
            return;
        }
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send("Missing property " + key);
                return;
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        var _a, _b;
        var PATH = MetadataKeys_1.MetadataKeys.PATH, METHOD = MetadataKeys_1.MetadataKeys.METHOD, MIDDLEWARE = MetadataKeys_1.MetadataKeys.MIDDLEWARE, VALIDATE = MetadataKeys_1.MetadataKeys.VALIDATE;
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(PATH, target.prototype, key);
            var method = Reflect.getMetadata(METHOD, target.prototype, key);
            var middlewares = (_a = Reflect.getMetadata(MIDDLEWARE, target.prototype, key)) !== null && _a !== void 0 ? _a : [];
            var requiredBodyProps = (_b = Reflect.getMetadata(VALIDATE, target.prototype, key)) !== null && _b !== void 0 ? _b : [];
            var validate = bodyValidator(requiredBodyProps);
            if (path) {
                router[method].apply(router, __spreadArrays(["" + routePrefix + path], middlewares, [validate, routeHandler]));
            }
        }
    };
}
exports.controller = controller;
