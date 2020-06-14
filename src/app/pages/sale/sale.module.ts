import { NgModule } from '@angular/core';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';

import { SalesModalComponent } from './components/sales-modal/sales-modal.component';

import { DemoMaterialModule } from './material-modules'
@NgModule({
  imports: [
    SaleRoutingModule,
    DemoMaterialModule
  ],
  declarations: [SaleComponent, SalesModalComponent],
  exports: [SaleComponent]
})
export class SaleModule { }
