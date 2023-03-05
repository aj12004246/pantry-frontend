
import { Step } from "./Step";

export class Recipe {
    constructor(
        public id: number, 
        public accountId: number,
        public userName: string,
        public name: string,        
        public img: string,
        public steps: Step[]
    ){}
}