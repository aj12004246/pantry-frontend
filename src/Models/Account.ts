import { Friend } from "./Friend";
import { Item } from "./Item";
import { Recipe } from "./Recipe";
import { User } from "./User";

export class Account {
    constructor(
        public id: number, 
        public email: string,
        public password: string,
        public name: string,
        public users: User[],
        public friends: Friend[],
        public items: Item[],
        public recipes: Recipe[]
    ){}
}