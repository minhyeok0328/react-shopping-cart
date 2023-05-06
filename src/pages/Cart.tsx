import { EstimatedAmount, PageTitle } from '../components/molecules';
import { Flex } from '../components/atomes';
import CartContainer from '../components/organisms/cart/CartContainer';

export default function Cart() {
  return (
    <section className="cart-section">
      <PageTitle title="장바구니"/>

      <Flex className="justify-between">
        <CartContainer/>
        <EstimatedAmount
          amount={21800}
          orderCount={3}
        />
      </Flex>
    </section>
  );
}
