import { ProductService } from '../service';
import { useCallback, useEffect } from 'react';
import ProductContainer from '../components/organisms/product/ProductContainer';
import { useInfinityScroll, usePagination } from '../hooks';
import { useAtom } from 'jotai';
import { products } from '../store/products';

export default function List() {
  const { findAllProducts } = ProductService();
  const [productItems, setProductItems] = useAtom(products);
  const { items, nextPage } = usePagination(productItems, 8);

  const getProducts = useCallback(async () => {
    const productItems = await findAllProducts();
    setProductItems(productItems);
  }, []);

  const ref = useInfinityScroll(() => {
    nextPage();
  });

  useEffect(() => {
    if (!productItems.length) {
      getProducts();
    }
  }, []);

  return (
    <div className="card-list">
      <ProductContainer products={items}/>
      <div ref={ref}></div>
    </div>
  );
}
