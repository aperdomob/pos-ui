import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintLayoutBillComponent } from './components/print-layout-bill/print-layout-bill.component';
import { PrintInvoiceBillComponent } from './components/print-invoice-bill/print-invoice-bill.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/sales' },
  // { path: '', loadChildren: () => import('./pages/sale/sale.module').then(m => m.SaleModule) },
  // { path: '', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule) },
  { path: 'print',
    outlet: 'print',
    component: PrintLayoutBillComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: PrintInvoiceBillComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
