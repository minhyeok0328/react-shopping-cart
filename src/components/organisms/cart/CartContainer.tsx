export default function CartContainer() {
  return (
    <section className="cart-left-section">
      <div className="flex justify-between items-center">
        <div className="checkbox-container">
          <input
            checked="true"
            className="checkbox"
            name="checkbox"
            type="checkbox"
          />
          <label className="checkbox-label" htmlFor="checkbox">선택해제</label>
        </div>
        <button className="delete-button">상품삭제</button>
      </div>
      <h3 className="cart-title">든든배송 상품(3개)</h3>
      <hr className="divide-line-gray mt-10"/>
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input
            checked="true"
            className="checkbox"
            name="checkbox"
            type="checkbox"
          />
          <img
            alt="PET보틀-정사각(420ml)"
            className="w-144 h-144"
            src="./assets/images/product.png"
          />
          <span className="cart-name">PET보틀-정사각(420ml)</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <img
            alt="삭제"
            className="cart-trash-svg"
            src="./assets/svgs/trash.svg"
          />
          <div className="number-input-container">
            <input className="number-input" type="number" value="1"/>
            <div>
              <button className="number-input-button">▲</button>
              <button className="number-input-button">▼</button>
            </div>
          </div>
          <span className="cart-price">123,456원</span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10"/>
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input
            checked="true"
            className="checkbox"
            name="checkbox"
            type="checkbox"
          />
          <img
            alt="PET보틀-정사각(420ml)"
            className="w-144 h-144"
            src="./assets/images/product.png"
          />
          <span className="cart-name">PET보틀-정사각(420ml)</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <img
            alt="삭제"
            className="cart-trash-svg"
            src="./assets/svgs/trash.svg"
          />
          <div className="number-input-container">
            <input className="number-input" type="number" value="1"/>
            <div>
              <button className="number-input-button">▲</button>
              <button className="number-input-button">▼</button>
            </div>
          </div>
          <span className="cart-price">123,456원</span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10"/>
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input
            checked="true"
            className="checkbox"
            name="checkbox"
            type="checkbox"
          />
          <img
            alt="PET보틀-정사각(420ml)"
            className="w-144 h-144"
            src="./assets/images/product.png"
          />
          <span className="cart-name">PET보틀-정사각(420ml)</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <img
            alt="삭제"
            className="cart-trash-svg"
            src="./assets/svgs/trash.svg"
          />
          <div className="number-input-container">
            <input className="number-input" type="number" value="1"/>
            <div>
              <button className="number-input-button">▲</button>
              <button className="number-input-button">▼</button>
            </div>
          </div>
          <span className="cart-price">123,456원</span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10"/>
    </section>
  );
}
