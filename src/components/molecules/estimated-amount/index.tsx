import { memo, useCallback } from 'react';
import { priceFormat } from '../../../utils';
import { Button, DivideLine } from '../../atomes';

interface Props {
  amount: number;
  orderCount: number;
  onClick?: () => void;
}

function EstimatedAmount({ amount, orderCount, onClick }: Props) {
  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <section className="cart-right-section">
      <div className="cart-right-section__top">
        <h3 className="cart-title">결제예상금액</h3>
      </div>
      <DivideLine className="divide-line-thin"/>
      <div className="cart-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <span className="highlight-text">결제예상금액</span>
          <span className="highlight-text">{priceFormat(amount)}</span>
        </div>
        <div className="flex-center mt-30 mx-10">
          <Button text={`주문하기 (${orderCount}개)`} onClick={handleClick}/>
        </div>
      </div>
    </section>
  );
}

export default memo(EstimatedAmount);
