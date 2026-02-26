import { Component, inject } from '@angular/core';
import { LowerCasePipe, DatePipe, CurrencyPipe, DecimalPipe } from '@angular/common';
import { CarService } from './car.service';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LowerCasePipe, DatePipe, CurrencyPipe, DecimalPipe, ReversePipe],
  template: `
    <p>Car Listing: {{ display }}</p>

    <hr />

    <h3>Pipes</h3>
    <ul>
      <li>Lowercase: {{ username | lowercase }}</li>
      <li>Number with "decimal": {{ num | number: '3.2-2' }}</li>
      <li>Date with "date": {{ birthday | date: 'medium' }}</li>
      <li>Currency with "currency": {{ cost | currency }}</li>
    </ul>

    <hr />

    <h3>Custom Pipe</h3>
    <p>Reverse Machine: {{ word | reverse }}</p>
  `,
})
export class App {
  //  DI (inject)
  carService = inject(CarService);

  //  use service result
  display = this.carService.getCars().join(' ⭐️ ');

  //  pipes data
  username = 'yOunGTECH';
  num = 12.3;
  birthday = new Date(2015, 5, 15, 21, 43, 11); // Jun 15, 2015 9:43:11 PM (month is 0-based)
  cost = 25.5;

  // custom pipe demo
  word = 'Angular';
}