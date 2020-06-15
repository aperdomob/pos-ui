import { Injectable } from '@angular/core';
import { of, ReplaySubject, Observable, Subject } from 'rxjs';
import { ProductSale } from '../interfaces/product-sale.interface';
import { SearchProduct } from '../interfaces/search-product.interface';

@Injectable({
  providedIn: 'root'
})
export class SellService {
  private source = new Subject<ProductSale>();
  data$ = this.source.asObservable();


  constructor() { }

  addItem(item: SearchProduct) {
    this.source.next({
      item: item.name,
      amount: item.total,
      price: item.price
    });
  }
}
