import { NgModule } from '@angular/core';

import { SaleRoutingModule } from './sale-routing.module';

import { SaleComponent } from './sale.component';


@NgModule({
  imports: [SaleRoutingModule],
  declarations: [SaleComponent],
  exports: [SaleComponent]
})
export class SaleModule { }
