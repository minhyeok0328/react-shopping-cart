import { Repository } from './Repository';
import { IOrder } from '../types/shoppingCart';
import { orders } from '../mocks/data';

class OrderRepository extends Repository<IOrder> {
  constructor(storeKey: string, initialItems: IOrder[]) {
    super(storeKey, initialItems);
  }
}

export const orderRepository = new OrderRepository('orders', orders);
