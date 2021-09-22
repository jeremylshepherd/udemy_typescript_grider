import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function validateBody(...keys: string[]) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        const { VALIDATE } = MetadataKeys;
        Reflect.defineMetadata(VALIDATE, keys, target, key);
    }
}