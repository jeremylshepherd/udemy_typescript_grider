import { UserProps } from '../interfaces';
import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {            
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveModel
        };
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();        
    }

    onSetNameClick = (): void => {
        const input = this.parent?.querySelector('input');
        
        if(input) {
            const name = input.value;
            this.model.set({ name });
        }
    }

    onSaveModel = (): void => {
        this.model.save();
    }

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <input class="" value="" placeholder="${this.model.get('name')}"/>
                <button class="set-name">Update Name</button>
                <button class="set-age">Random Age</button>
                <button class="save-model">Save User</button>
            </div>
        `;
    }
}