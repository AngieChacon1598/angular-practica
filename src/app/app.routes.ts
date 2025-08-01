import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: '', redirectTo: 'counter', pathMatch: 'full' }
];
