import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { PRODUCTS } from './products.data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = PRODUCTS;

  getAll(): Product[] {
    return this.products;
  }

  getByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  deleteById(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }
}