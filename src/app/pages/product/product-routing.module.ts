import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';

const routes: Routes = [
  { path: '', component: ProductOverviewComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
