import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { StocktakingOverviewComponent } from './components/stocktaking-overview/stocktaking-overview.component';

const routes: Routes = [
  { path: 'products', component: ProductOverviewComponent },
  { path: 'stocktaking', component: StocktakingOverviewComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
