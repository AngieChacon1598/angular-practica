import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter-container">
      <h2>Contador: <span class="counter-value">{{ counter() }}</span></h2>
      <div class="button-group">
        <button class="btn increment" (click)="increment()">Incrementar</button>
        <button class="btn decrement" (click)="decrement()">Decrementar</button>
      </div>
    </div>
  `,
  styleUrls: ['./counter.scss']
})
export class CounterComponent {
  counter = signal(0);

  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.set(this.counter() - 1);
  }
}
