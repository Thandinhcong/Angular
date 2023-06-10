import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"
import { IProduct } from 'src/common/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProduct(): Observable<any> {
    return this.http.get<IProduct[]>('http://localhost:3000/products/')
  }
  getOneProduct(id: any): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/products/' + id)
  }
  addProduct(products: IProduct): Observable<IProduct[]> {
    return this.http.post<IProduct[]>('http://localhost:3000/products/', products)
  }
  deleteProduct(id: any): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:3000/products/` + id);
  }
  updateProduct(products: IProduct): Observable<IProduct[]> {
    return this.http.put<IProduct[]>(`http://localhost:3000/products/${products.id}`, products)
  }
}
