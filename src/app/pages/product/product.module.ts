import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductRoutingModule } from './product-routing.module';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductOverviewComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule
  ]
})
export class ProductModule { }
