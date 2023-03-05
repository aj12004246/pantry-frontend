export class Item {
    constructor(
        public id: number,
        public accountId: number, 
        public name: string,        
        public img: string, 
        public weight: number, 
        public calories: number
    ){}
}