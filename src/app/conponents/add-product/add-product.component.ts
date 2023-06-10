import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/common/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product!: IProduct;
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }
  AddForm = this.formBuilder.group({
    name: [''],
    price: [0],
    description: [''],
    image: ['']
  })
  onHandleSubmit() {
    if (this.AddForm.valid) {
      const products: IProduct = {
        name: this.AddForm.controls['name'].value || '',
        price: this.AddForm.controls['price'].value || 0,
        description: this.AddForm.controls['description'].value || '',
        image: this.AddForm.controls['image'].value || '',
      }
      this.productService.addProduct(products).subscribe(data => {
        alert("thêm thành công");
        this.router.navigate(['/'])

      })
    }
  }
}
