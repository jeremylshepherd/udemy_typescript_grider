"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports._delete = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("../decorators/MetadataKeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, dec) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.PATH, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.METHOD, method, target, key);
        };
    };
}
exports.get = routeBinder("get" /* GET */);
exports.put = routeBinder("put" /* PUT */);
exports.post = routeBinder("post" /* POST */);
exports._delete = routeBinder("delete" /* DELETE */);
exports.patch = routeBinder("patch" /* PATCH */);
