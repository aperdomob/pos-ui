import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Stocktaking } from 'src/app/domain/Stocktaking';

interface StocktakingSearchDto {
  stocktakingId: number;
  productId: number;
  available: number;
  name: string;
  reference: string;
  price: number;
  lastCost: number;
  averageCost: number;
};

interface StocktakingSearchCollectionResponse {
  _embedded?: {
    items: StocktakingSearchDto[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class StocktakingService {
  private posUrl = 'http://localhost:8080/search/stocktaking'

  private _stocktaking = new BehaviorSubject<Stocktaking[]>([]);
  private _items: Stocktaking[] = [];

  constructor(private http: HttpClient) { }

  public getStocktaking() {
    return this._stocktaking.asObservable();
  }

  public all(): Observable<Stocktaking[]> {
    this.http.get<StocktakingSearchCollectionResponse>(this.posUrl).pipe(
      map((response) => {
        if (response._embedded) {
          return [...response._embedded.items].map(this.map);
        }

        return [];
      }
    )).subscribe((items) => {
      this._items = [...items]
      this._stocktaking.next(this._items);
    });

    return this.getStocktaking();
  }

  private map(dto: StocktakingSearchDto): Stocktaking {
    return {
      id: dto.stocktakingId,
      product: {
        id: dto.productId,
        name: dto.name,
        reference: dto.reference,
        price: dto.price
      },
      available: dto.available,
      cost: dto.lastCost
    };
  }
}
