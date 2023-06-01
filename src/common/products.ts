export interface IProducts {
    id?: string | number
    name: string,
    price: number,
    description: string,
    image: string,
    quantity: number
}
export interface IProduct {
    categoryId: string;
    comments: any[]; // Kiểu dữ liệu của mảng comments có thể thay đổi theo yêu cầu
    createdAt: string;
    description: string;
    image: string;
    name: string;
    original_price: number;
    price: number;
    salient_features: string;
    updatedAt: string;
    _id: string;
}