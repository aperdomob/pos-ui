import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductRoutingModule } from './product-routing.module';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule }    from '@angular/common/http';



@NgModule({
  declarations: [ProductOverviewComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProductModule { }
