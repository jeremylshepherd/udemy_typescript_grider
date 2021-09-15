import { AxiosResponse } from 'axios';
import { HasId, iAPISync, iEvents, iModelAttributes } from "../interfaces";

export class Model<T extends HasId> {
    constructor(
        private attributes: iModelAttributes<T>,
        private events: iEvents,
        private sync: iAPISync<T>
    ) {}   

    get on() {
        return this.events.on;
    }
    
    get trigger() {
        return this.events.trigger;
    }
    
    get get() {
    return this.attributes.get;
}
    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.get('id');
    
        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id');
        }
    
        this.sync.fetch(id).then(
            (response: AxiosResponse): void => {              
                this.set(response.data);
            }
        );
    }

    save(): void {
        this.sync
            .save(this.attributes.getAll())
            .then((response: AxiosResponse): void => {
                this.trigger('save');
            })
            .catch(() => {
                this.trigger('error');
            });
    }

}