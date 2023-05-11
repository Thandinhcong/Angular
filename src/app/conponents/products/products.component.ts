import { Component } from '@angular/core';
import { IProducts } from 'src/common/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: IProducts = {
    name: "iPhone 13 pro max",
    price: 2000000,
    description: "sản phẩm đểu nhất hay lỗi màn",
  }
  listProduct: IProducts[] = [
    { id: 1, name: "iPhone 14 Pro max", price: 20000, description: "sản phẩm ok" },
    { id: 2, name: "iPhone 15 Pro max", price: 200001, description: "sản phẩm ok" },
    { id: 3, name: "iPhone 16 Pro max", price: 200002, description: "sản phẩm ok" },
    { id: 4, name: "iPhone 17 Pro max", price: 200003, description: "sản phẩm ok" },
    { id: 5, name: "iPhone 18 Pro max", price: 200004, description: "sản phẩm ok" },
  ]
}
