import { Component } from '@angular/core';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList],
  template: `
    <h1>Online Store</h1>
    <app-product-list></app-product-list>
  `,
  styles: [`
    h1 { margin: 16px 0; }
  `]
})
export class App {}