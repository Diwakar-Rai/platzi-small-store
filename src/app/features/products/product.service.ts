import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly BASE_URL = 'https://api.escuelajs.co/api/v1/products';

  private http = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>(this.BASE_URL);
  }
}
