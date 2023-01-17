import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductNameModel } from '../models/product-name.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductNameModel[]> {
    return this._httpClient.get<ProductNameModel[]>('https://fakestoreapi.com/products');
  }
}
