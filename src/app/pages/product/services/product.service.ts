import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/domain/Product';

interface ProductDto {
  id?: number;
  name: string;
  reference: string;
  price: number;
}

interface ProductCollectionResponse {
  _embedded: {
    productDtoList: {
      id: number;
      name: string;
      reference: string;
      price: number
    }[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private posUrl = 'http://localhost:8080/products'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  public save(product: ProductDto): Observable<Product> {
    return this.http
      .post<ProductDto>(this.posUrl, product, this.httpOptions)
      .pipe(
        map((bodyResponse: ProductDto): Product => this.mapperToDomain(bodyResponse))
      );
  }

  public getAll(): Observable<Product[]> {
    return this.http.get<ProductCollectionResponse>(this.posUrl).pipe(
      map((response) => {
        return response._embedded.productDtoList.map((product) => this.mapperToDomain(product));
      }
    ));
  }

  private mapperToDomain(product: ProductDto): Product {
    return {
      id: product.id,
      name: product.name,
      reference: product.reference,
      price: product.price
    };
  }
}
