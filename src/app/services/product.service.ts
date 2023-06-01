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
    return this.http.get<IProduct[]>('http://localhost:8080/api/products/')
  }
  // getOneProduct(id: any): Observable<IProducts[]> {
  //   return this.http.get<IProducts[]>('http://localhost:3000/products/' + id)
  // }
  // addProduct(products: IProducts): Observable<IProducts[]> {
  //   return this.http.post<IProducts[]>('http://localhost:3000/products/', products)
  // }
  deleteProduct(id: any): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:8080/api/products/` + id);
  }
  // updateProduct(products: IProducts): Observable<IProducts[]> {
  //   return this.http.put<IProducts[]>(`http://localhost:3000/products/${products.id}`, products)
  // }
}
