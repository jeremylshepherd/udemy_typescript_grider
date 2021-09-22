import 'reflect-metadata';
import { Methods } from '../../Methods';
import { MetadataKeys } from '../decorators/MetadataKeys';

function routeBinder(method: string) {
    return function(path: string) {
        return function(target: any, key: string, dec: PropertyDescriptor) {
            Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
            Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
        }
    }
}

export const get = routeBinder(Methods.GET);
export const put = routeBinder(Methods.PUT);
export const post = routeBinder(Methods.POST);
export const _delete = routeBinder(Methods.DELETE);
export const patch = routeBinder(Methods.PATCH);



