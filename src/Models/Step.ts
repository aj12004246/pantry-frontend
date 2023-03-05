
export class Step {
    constructor(
        public id: number, 
        public recipeId: number,        
        public description: string,
        public itemId: number,
        public itemName: string,
        public itemWeight: number,
    ){}
}



