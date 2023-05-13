import { Component } from '@angular/core';
import { listProduct } from 'src/app/data/mookData';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  listProduct = listProduct

  deleteProducts = (id: string | number = "") => {
    const confilm = window.confirm("bạn có muốn xóa không ?");
    if (confilm) {
      this.listProduct = this.listProduct.filter((product) => product.id !== id)
      alert("xóa thành công sản phẩm")
    }
  }
}
