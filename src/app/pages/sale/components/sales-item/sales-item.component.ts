import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { SearchProductService } from '../../services/search-product.service';
import { SellService } from '../../services/sell.service';
import { ProductSale } from '../../interfaces/product-sale.interface';

@Component({
  selector: 'app-sales-item',
  templateUrl: './sales-item.component.html',
  styleUrls: ['./sales-item.component.css']
})
export class SalesItemComponent implements OnInit {
  searchValue: string = "";

  listOfData: ProductSale[] = [];

  constructor(
    private modalService: NzModalService,
    private searchProductService: SearchProductService,
    private sellService: SellService) { }

  ngOnInit() {
    this.sellService.data$.subscribe((item: ProductSale) => {
      this.listOfData = [...this.listOfData, item];
    });
  }

  getTotalByItem(item: ProductSale) {
    return item.price * item.amount;
  }

  getTotalAmount() {
    return this.listOfData.reduce((pv, cv) => pv + cv.amount, 0);
  }

  getTotalCost() {
    return this.listOfData.reduce((pv, cv) => pv + cv.price, 0);
  }

  getTotal() {
    return this.listOfData.reduce((pv, cv) => pv + cv.price * cv.amount, 0);
  }

  searchProduct() {
    this.searchProductService.search(this.searchValue).subscribe(() => {
      this.modalService.create({
        nzTitle: 'Buscar Producto',
        nzWidth: 1200,
        nzContent: ProductSearchComponent
      });
    });
  }

  isVisible = false;
  isConfirmLoading = false;

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
