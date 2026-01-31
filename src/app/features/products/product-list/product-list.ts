import { Component, inject, OnInit, signal } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  private productService = inject(ProductService);
  products = signal<Product[]>([]);
  isLoading = signal(true);
  errorMessage = signal('');
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (productData) => {
        this.products.set(productData);
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Failed to load products');
        this.isLoading.set(false);
      },
    });
  }
}
