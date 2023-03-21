import { Repository } from './Repository';
import { IProduct } from '../types/shoppingCart';
import { products } from '../mocks/data';

class ProductRepository extends Repository<IProduct> {
  constructor(storeKey: string, initialItems: IProduct[]) {
    super(storeKey, initialItems);
  }
}

export const productRepository = new ProductRepository('products', products);
