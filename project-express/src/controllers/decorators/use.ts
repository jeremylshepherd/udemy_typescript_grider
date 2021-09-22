import { RequestHandler } from 'express';
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        const { MIDDLEWARE } = MetadataKeys;
        const middlewares = Reflect.getMetadata(MIDDLEWARE, target, key) || [];
        Reflect.defineMetadata(MIDDLEWARE, [...middlewares, middleware], target, key);
    }
}