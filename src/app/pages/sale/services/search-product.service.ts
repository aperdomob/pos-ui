import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { SearchProduct } from '../interfaces/search-product.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


interface CollectionResponse {
  _embedded?: {
    items: any[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class SearchProductService {
  private posUrl = 'http://localhost:8080/search/products'
  private pattern: string = "";
  private searchResult: SearchProduct[];

  private _products = new BehaviorSubject<any[]>([]);
  private _items: any[] = [];


  constructor(private http: HttpClient) { }

  public getPattern(): Observable<string> {
    return of(this.pattern);
  }

  public search(pattern: string): Observable<any[]> {
    this.pattern = pattern;

    return this.http.get<CollectionResponse>(`${this.posUrl}?q=${pattern}`).pipe(
      map((response) => {
        if (response._embedded) {
          this._items = [...response._embedded.items].map(this.map);
        } else {
          this._items = [];
        }

        this._products.next(this._items);

        return this._items;
      })
    );
  }

  public observer() {
    return this._products.asObservable();
  }

  public getLastResults() {
    return of(this.searchResult);
  }

  private map(dto: any) {
    return {
      name: dto.name,
      reference: dto.reference,
      price: dto.price,
      available: dto.available,
      total: 1,
      cost: dto.cost
    };
  }
}
