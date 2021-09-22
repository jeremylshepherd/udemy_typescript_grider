@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    get FormattedColor(): string {
        return `This boat's color is ${this.color}`
    }

    @logError('Oops, boat was sunk in ocean.')
    pilot(
        @parameterDecorator speed: string,
        @parameterDecorator generateWake: boolean
    ): void {
        if (speed === 'fast') {
            console.log('swish');  
        } else {
            console.log('nothing');
            
        }   
    }
}

function parameterDecorator(target: Boat, key: string, index: number) {
    console.log({
        target,
        key,
        index
    });
}

function classDecorator(constructor: typeof Boat) {
    console.log({ constructor });
    
}

function testDecorator(target: any, key: string) {
    console.log({ target, key });    
}

function logError(errorMessage: string) {
    return function(target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;

        desc.value = function() {
            try {
                method();
            } catch (error) {
                console.error(errorMessage);
            }
        }
    }
}

new Boat().pilot('fast', true);