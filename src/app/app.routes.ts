import { Routes } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path : '', component: Home },
    { path: 'menu', component: Menu }
];
