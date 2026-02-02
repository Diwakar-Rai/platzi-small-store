import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { ProductList } from './features/products/product-list/product-list';
import { authGuard } from './core/auth/auth.guard';
import { ProductDetails } from './features/products/product-details/product-details';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'register', component: Register },
  {
    path: 'products',
    component: ProductList,
    // It takes an array, with functions return boolean value, based on the boolean, it decides whether this route can be accessed or not.
    canActivate: [authGuard],
  },
  {
    path: 'products/:id',
    component: ProductDetails,
    canActivate: [authGuard],
  },
];
