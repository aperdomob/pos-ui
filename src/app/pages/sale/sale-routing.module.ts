import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { SalesItemComponent } from './components/sales-item/sales-item.component';
import { PrintLayoutBillComponent } from './components/print-layout-bill/print-layout-bill.component';
import { PrintInvoiceBillComponent } from './components/print-invoice-bill/print-invoice-bill.component';

const routes: Routes = [
  // { path: '', component: SaleComponent },
  {
    path: 'sales',
    children: [
      { path: 'print',
      outlet: 'print',
      component: PrintLayoutBillComponent,
      children: [
        { path: 'invoice', component: PrintInvoiceBillComponent }
      ]
    }]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SaleRoutingModule { }
