import { UserList } from './views/UserList';
import { UserProps } from './interfaces';
import { User } from './models/User';
import { Collection } from './models/Collection';
import { usersAPI } from './constants';

const app = document.querySelector('#app');
if (app) {
    const userCollection = new Collection(usersAPI, (json: UserProps) => {
        return User.buildUser(json);
    });
    
    userCollection.on('change', () => {
        const usersList = new UserList(app, userCollection);
        usersList.render();
    });

    userCollection.fetch();

    const usersList = new UserList(app, userCollection);
    usersList.render();
    
} else {
    throw new Error('App element in not found');
}