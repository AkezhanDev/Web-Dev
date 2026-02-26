import { Component } from '@angular/core';

@Component({
  selector: 'comments',
  standalone: true,
  template: `
    <div class="block" style="margin-top: 12px;">
      <h4>Comments</h4>
      <p class="muted">Loaded with &#64;defer ✅</p>
    </div>
  `,
})
export class Comments {}