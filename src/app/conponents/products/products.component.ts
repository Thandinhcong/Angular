import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
// import { IProducts } from 'src/common/products';
import { IProduct } from 'src/common/products';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  status: boolean = false;

  productName = "";

  product!: IProduct;

  productss: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProduct().subscribe((data) => {
      console.log({ data });

      this.productss = data.products
    }, error =>
      console.log({ error })
    )
  }

  getValue(e: any) {
    this.productName = e.target.value;
  }

  changeStatus() {
    this.status = !this.status;
  }

  deleteProducts = (id: string | number = "") => {
    const confilm = window.confirm("bạn có muốn xóa không ?");
    if (confilm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.productss.filter((product) => product._id !== id)
        alert("xóa thành công sản phẩm")
      })
    }
  }
}
