export interface IProducts {
    id?: string | number
    name: string,
    price: number,
    description: string,
    image: string,
    quantity: number
}
export interface IProduct {
    description: string;
    image: string;
    name: string;
    price: number;
    id?: string | number;
}