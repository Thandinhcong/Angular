import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/common/products';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  submitted: boolean = false;
  products!: IProduct;
  UpdateForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: [0, Validators.required, Validators.minLength(5)],
    description: ['', Validators.min(225)],
    image: ['', Validators.required]
  })
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get('id'));
      this.productService.getOneProduct(id).subscribe(product => {
        this.products = product;
        this.UpdateForm.patchValue({
          name: this.products.name,
          price: this.products.price,
          description: this.products.description,
          image: this.products.image,

        })
      })
    })
  }

  onHandleSubmit() {
    if (this.UpdateForm.valid && this.products) {
      const products: IProduct = {
        name: this.UpdateForm.controls['name'].value || '',
        price: this.UpdateForm.controls['price'].value || 0,
        description: this.UpdateForm.controls['description'].value || '',
        image: this.UpdateForm.controls['image'].value || '',
      }
      this.productService.addProduct(products).subscribe(data => {
        alert("Cập nhật thành công");
        this.router.navigate(['/'])

      })
    }
  }
}
