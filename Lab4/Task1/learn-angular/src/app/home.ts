import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Home</h2>

    <!-- ВАЖНО: если хочешь показать в тексте @if/@else — пиши &#64; -->
    <p>Angular control flow keywords: &#64;if, &#64;else, &#64;for, &#64;defer</p>

    <hr />

    <!-- Пример настоящего @if блока -->
    @if (true) {
      <p style="color: green;">&#64;if works ✅</p>
    } @else {
      <p style="color: red;">&#64;else works ✅</p>
    }

    <hr />

    <!-- Пример @for -->
    @for (u of ['Sarah','Amy','Rachel']; track $index) {
      <p>- {{ u }}</p>
    }

    <hr />

    <!-- Пример @defer -->
    <h3>Defer demo</h3>
    @defer {
      <p>Loaded with &#64;defer ✅</p>
    } @placeholder {
      <p>Loading...</p>
    }
  `,
})
export class Home {}