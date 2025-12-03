import { Routes } from '@angular/router';
import { Plateau } from './plateau/plateau';
import { Cellules } from './cellules/cellules';

export const routes: Routes = [
    {path: '', redirectTo: 'plateau', pathMatch: 'full' },
  { path: 'plateau', component: Plateau },
  { path: 'cellules', component: Cellules },
];
