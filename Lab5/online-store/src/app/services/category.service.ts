import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { CATEGORIES } from './categories.data';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = CATEGORIES;

  getAll(): Category[] {
    return this.categories;
  }
}