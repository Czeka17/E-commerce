export interface Item {
    _id: string;
    category: string;
    type: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    sizes:string[];
    colors:string[];
}