import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from './models/category.model';
import { CategoryService } from './services/category.service';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories: Category[] = [];
  selectedCategoryId = 1;
  filteredProducts: Product[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categories = this.categoryService.getAll();
    this.filteredProducts = this.productService.getByCategory(this.selectedCategoryId);
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.filteredProducts = this.productService.getByCategory(id);
  }

  handleRemove(id: number) {
    this.productService.deleteById(id);
    this.filteredProducts = this.productService.getByCategory(this.selectedCategoryId);
  }
}