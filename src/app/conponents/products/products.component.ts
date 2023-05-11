import { Component } from '@angular/core';
import { IProducts } from 'src/common/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  listProduct: IProducts[] = [
    {
      id: 1,
      name: "iPhone 14 Pro max",
      price: 20000,
      description: "sản phẩm ok",
      image: "https://res.cloudinary.com/dxzlnojyv/image/upload/v1683199179/mvzydjz3jschfgwg5wlq.png"
    },
    {
      id: 2,
      name: "iPhone 15 Pro max",
      price: 200001,
      description: "sản phẩm ok",
      image: "https://res.cloudinary.com/dxzlnojyv/image/upload/v1683199179/mvzydjz3jschfgwg5wlq.png"
    },
    {
      id: 3,
      name: "iPhone 16 Pro max",
      price: 200002,
      description: "sản phẩm ok",
      image: "https://res.cloudinary.com/dxzlnojyv/image/upload/v1683199179/mvzydjz3jschfgwg5wlq.png"
    },
    {
      id: 4,
      name: "iPhone 17 Pro max",
      price: 200003,
      description: "sản phẩm ok",
      image: "https://res.cloudinary.com/dxzlnojyv/image/upload/v1683199179/mvzydjz3jschfgwg5wlq.png"
    },
    {
      id: 5,
      name: "iPhone 18 Pro max",
      price: 200004,
      description: "sản phẩm ok",
      image: "https://res.cloudinary.com/dxzlnojyv/image/upload/v1683199179/mvzydjz3jschfgwg5wlq.png"
    },
  ]
  deleteProducts = (id: string | number = "") => {
    const confilm = window.confirm("bạn có muốn xóa không ?");
    if (confilm) {
      this.listProduct = this.listProduct.filter((product) => product.id !== id)
      alert("xóa thành công sản phẩm")
    }
  }
}
