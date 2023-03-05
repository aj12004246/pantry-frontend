export class RecipeItem {
    constructor(
        public id: number, 
        public stepId: number,        
        public itemId: number, 
        public itemName: string,
        public weight: number
    ){}
}