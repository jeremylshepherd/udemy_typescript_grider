import { NextFunction, RequestHandler, Request, Response } from 'express';
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from '../../Methods';
import { MetadataKeys } from '../decorators/MetadataKeys';

function bodyValidator(keys: string): RequestHandler {
    return function(req: Request, res: Response, next: NextFunction) {
      if (!req.body) {
        res.status(422).send('Invalid request');
        return;
      }
  
      for (let key of keys) {
        if (!req.body[key]) {
          res.status(422).send(`Missing property ${key}`);
          return;
        }
      }
  
      next();
    };
  }

export function controller(routePrefix: string) {
    return function(target: Function) {  
        const { PATH, METHOD, MIDDLEWARE, VALIDATE } = MetadataKeys;
        const router = AppRouter.getInstance();
        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(PATH, target.prototype, key);
            const method: Methods = Reflect.getMetadata(METHOD, target.prototype, key);
            const middlewares = Reflect.getMetadata(MIDDLEWARE, target.prototype, key) ?? [];
            const requiredBodyProps = Reflect.getMetadata(VALIDATE, target.prototype, key) ?? [];

            const validate = bodyValidator(requiredBodyProps);

            if (path) {
                router[method](`${routePrefix}${path}`, ...middlewares, validate, routeHandler)
            }
        }
    }
}