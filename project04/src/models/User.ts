import { UserProps } from "../interfaces";
import { usersAPI } from "../constants";
import { Model } from "./Model";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { APISync } from "./APISync";
import { Collection } from "./Collection";

export class User extends Model<UserProps>{    
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new APISync<UserProps>(usersAPI)
        )
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(usersAPI, (json) => User.buildUser(json));
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }
}