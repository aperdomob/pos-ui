import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/sales' },
  { path: '', loadChildren: () => import('./pages/sale/sale.module').then(m => m.SaleModule) },
  { path: '', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
