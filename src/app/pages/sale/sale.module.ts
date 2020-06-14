import { NgModule } from '@angular/core';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';

import { SalesModalComponent } from './components/sales-modal/sales-modal.component';

import { SalesItemComponent } from './components/sales-item/sales-item.component'

import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductSearchComponent } from './components/product-search/product-search.component'

@NgModule({
  imports: [
    CommonModule,
    SaleRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule
  ],
  declarations: [SaleComponent, SalesModalComponent, SalesItemComponent, ProductSearchComponent],
  exports: [SalesItemComponent]
})
export class SaleModule { }
