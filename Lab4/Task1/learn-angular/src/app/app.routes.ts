import { Routes } from '@angular/router';
import { Home } from './home';
import { User } from './user';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'user', component: User, title: 'User' },
];