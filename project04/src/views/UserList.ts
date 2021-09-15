import { User } from "../models/User";
import { UserProps } from "../interfaces";
import { CollectionView } from "./CollectionView";
import { Collection } from "../models/Collection";
import { UserShow } from "./UserShow";

export class UserList extends CollectionView<User, UserProps> {
    renderItem(model: User, itemParent: Element ): void {
        return new UserShow(itemParent, model).render();
    }

}
