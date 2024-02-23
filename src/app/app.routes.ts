import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainPageComponent } from './main-page/main-page.component';
import { authGuard } from '../core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',

    component: AuthComponent,
  },
  {
    path: 'main',
    canActivate: [authGuard],
    component: MainPageComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];
