import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  searchValue: string = "";
  isConfirmLoading = true;

  listOfData = [
    { name: 'Acetaminofen 500mg (Tableta)', reference: '770303804029', price: 24, available: 34},
    { name: 'Noravel Gripa y Tos (Caja)', reference: '7702057162252', price: 43, available: 5},
    { name: 'Azitromicina 500mg (Caja)', reference: '7703712030206', price: 2,  available: 834},
    ];

  constructor(private modal: NzModalRef) { }

  ngOnInit(): void {
  }

  searchProduct() {

  }

  destroyModal(): void {
    this.modal.destroy();
  }
}
