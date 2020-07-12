import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { ProductSearchComponent } from '../product-search/product-search.component';
import { SearchProductService } from '../../services/search-product.service';
import { SellService } from '../../services/sell.service';
import { ProductSale } from '../../interfaces/product-sale.interface';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PrintBillService } from '../../services/print-bill.service';

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
    private sellService: SellService,
    private notification: NzNotificationService,
    private printBillService: PrintBillService) { }

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
    this.searchProductService.search(this.searchValue).subscribe((result) => {
      if (result.length === 0) {
        this.notification.error(
          'Producto',
          `No se encontro ningun producto con el patron ${this.searchValue}`,
          {
            nzPlacement: 'bottomRight',
            nzDuration: 5000
          }
        );
        return;
      }
      if (result.length === 1) {
        this.listOfData = [ {
          item: result[0].name,
          amount: result[0].total,
          price: result[0].price
        },
        ...this.listOfData]

        this.searchValue = "";

        return;
      }

      this.modalService.create({
        nzTitle: 'Buscar Producto',
        nzWidth: 1500,
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

  onPrintInvoice() {
    const invoiceIds = ['101', '102'];
    this.printBillService
      .printDocument('invoice', invoiceIds);
  }
}
