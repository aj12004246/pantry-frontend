import { Item } from "./Item";

export class Pantry {
    constructor(
        public id: number, 
        public accountId: number,        
        public items: Item[]
    ){}
}