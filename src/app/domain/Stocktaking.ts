import { Product } from './Product';

export interface Stocktaking {
  id: number;
  product: Product;
  available: number;
  cost: number;
}
