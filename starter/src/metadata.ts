import 'reflect-metadata';
/*
    Example:
    const plane = {
        color: 'red'
    };

    Reflect.defineMetadata('note', 'hi there', plane, 'color');

    const note = Reflect.getMetadata('note', plane, 'color');

    console.log({ note });
*/

@controller
class Plane {    
    color: string = 'red';

    @get('123')
    fly(): void {
        console.log('vrrrrr');        
    }
}

function get(path: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('path', path, target, key);
    }
}

function controller(target: typeof Plane) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key);
        //router.get(path, target.prototype[key]);        
    }
}
