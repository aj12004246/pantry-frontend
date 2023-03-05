import { Recipe } from "./Recipe";

export class Friend {
    constructor(
        public id: number, 
        public accountId: number,        
        public friendId: number, 
        public name: string,    
        public myFriend: boolean,
        public isFriend: boolean,
        public friendRecipes: Recipe[]
    ){}
}