import { NgModule } from '@angular/core';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';

import { SalesModalComponent } from './components/sales-modal/sales-modal.component';

@NgModule({
  imports: [
    SaleRoutingModule,
  ],
  declarations: [SaleComponent, SalesModalComponent],
  exports: [SaleComponent]
})
export class SaleModule { }
