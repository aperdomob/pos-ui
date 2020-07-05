import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { SearchProductService } from '../../services/search-product.service';
import { SellService } from '../../services/sell.service';
import { SearchProduct } from '../../interfaces/search-product.interface';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  searchValue: string = "";
  isConfirmLoading = true;

  listOfData: SearchProduct[] = [];

  constructor(
    private modal: NzModalRef,
    private searchProductService: SearchProductService,
    private sellService: SellService) { }

  ngOnInit(): void {
    this.searchProductService.getPattern().subscribe((pattern) => this.searchValue = pattern);

    this.searchProductService.observer().subscribe(result => this.listOfData = result);
  }

  searchProduct() {

  }

  destroyModal(): void {
    this.modal.destroy();
  }

  add(item) {
    item.total++;
  }

  remove(item) {
    item.total--;
  }

  areAvailable(item) {
    return item.available <= item.total;
  }

  isEqualOrLessThanZero(item) {
    return item.total <= 0;
  }

  sell(item) {
    this.sellService.addItem(item);
  }
}
