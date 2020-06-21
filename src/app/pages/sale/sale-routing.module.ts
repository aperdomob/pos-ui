import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SaleComponent } from './sale.component';
import { SalesItemComponent } from './components/sales-item/sales-item.component';

const routes: Routes = [
  // { path: '', component: SaleComponent },
  { path: 'sales', component: SalesItemComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
