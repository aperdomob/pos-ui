import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {
  searchValue: String;
  listOfData = [{
    name: 'ubuprofeno',
    reference: '12432321132',
    price: '23000'
  }];
  listOfCurrentPageData = [];
  setOfCheckedId = new Set<number>();
  checked = false;
  indeterminate = false;

  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.modalService.create({
      nzTitle: 'Crear Producto',
      nzWidth: 500,
      nzContent: ProductComponent
    })
  }

  searchProduct() {

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
