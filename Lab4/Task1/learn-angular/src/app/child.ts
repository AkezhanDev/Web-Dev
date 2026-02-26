import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  styles: [
    `
      .btn {
        padding: 6px 10px;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
      }
    `,
  ],
  template: `<button class="btn" (click)="addItem()">Add Item</button>`,
})
export class Child {
  addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}