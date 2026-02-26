import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, NgOptimizedImage],
  template: `
    <h2>User page</h2>

    <p>Username: <b>{{ username }}</b></p>
    <p>{{ username }}'s favorite framework: <b>{{ favoriteFramework }}</b></p>

    <label for="framework">Favorite Framework:</label>
    <input
      id="framework"
      type="text"
      [(ngModel)]="favoriteFramework"
      placeholder="Type here..."
      style="display:block; margin-top:6px; padding:6px; width:260px;"
    />

    <hr />

    <h3>Optimized images (NgOptimizedImage)</h3>

    <p>Static image:</p>
    <img ngSrc="/logo.svg" alt="Angular logo" width="64" height="64" />

    <p style="margin-top:12px;">Dynamic image:</p>
    <img [ngSrc]="logoUrl" [alt]="logoAlt" width="64" height="64" />
  `,
})
export class User {
  username = 'youngTech';
  favoriteFramework = '';

  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
}