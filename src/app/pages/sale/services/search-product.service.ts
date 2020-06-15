import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { SearchProduct } from '../interfaces/search-product.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  private pattern: string = "";
  private searchResult: SearchProduct[];

  constructor() { }

  public getPattern(): Observable<string> {
    return of(this.pattern);
  }

  public search(pattern: string) {
    this.pattern = pattern;
    this.searchResult = [
      { name: 'Acetaminofen 500mg (Tableta)', reference: '770303804029', price: 24, available: 34, total: 1, cost: 20},
      { name: 'Noravel Gripa y Tos (Caja)', reference: '7702057162252', price: 43, available: 5, total: 1, cost: 12},
      { name: 'Azitromicina 500mg (Caja)', reference: '7703712030206', price: 2,  available: 834, total: 1, cost: 1}
    ];

    return of(this.searchResult);
  }

  public getLastResults() {
    return of(this.searchResult);
  }
}
