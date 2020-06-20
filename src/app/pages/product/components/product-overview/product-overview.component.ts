import { Component, OnInit, EventEmitter } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/domain/Product';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  searchValue: String;
  listOfData: Product[] = [];
  listOfCurrentPageData = [];
  setOfCheckedId = new Set<number>();
  checked = false;
  indeterminate = false;

  closeDialogEvent = new EventEmitter();

  constructor(
    private modalService: NzModalService,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.closeDialogEvent.subscribe((data: Product) => {
      if (data) {
        this.listOfData = [data, ...this.listOfData]
      }
    });

    this.productService.getAll().subscribe((response) => {
      this.listOfData = response;
    });
  }

  addProduct() {
    this.modalService.create({
      nzTitle: 'Crear Producto',
      nzWidth: 500,
      nzContent: ProductComponent,
      nzAfterClose: this.closeDialogEvent
    });
  }

  searchProduct() {

  }

  handleOk(): void {
    console.log('called');
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id)) && !this.checked;
  }
}
