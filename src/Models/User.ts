import { Recipe } from "./Recipe";

export class User {
    constructor(
        public id: number, 
        public accountId: number,        
        public name: string,
    ){}
}