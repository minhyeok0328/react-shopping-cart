import { http } from '../client/httpClient';
import { IProduct } from '../types/shoppingCart';

const BASE_URL = '/products';

export function ProductService() {
  const findAllProducts = async (page = 1): Promise<IProduct[]> => {
    const { data } = await http.get(`${BASE_URL}?page=${page}`);

    return data;
  };

  const findProductOne = async (id: number): Promise<IProduct> => {
    const { data } = await http.get(`${BASE_URL}/${id}`);

    return data;
  };

  return {
    findAllProducts,
    findProductOne
  };
}
