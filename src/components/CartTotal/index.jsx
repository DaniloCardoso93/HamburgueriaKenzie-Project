import { CartTotalStyle } from "./cartTotalStyle";

export function TotalCart({ currentSale, setCurrentSale }) {
  function Total() {
    return currentSale.reduce((acc, act) => acc + act.price, 0);
  }

  function CleanCart() {
    setCurrentSale([]);
  }

  return (
    <>
      <CartTotalStyle>
        <>
          <p className="classP1">Total</p>
          <p className="classP2">
            {Total().toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </>
        <button type="button" onClick={CleanCart}>
          Remover Tudo
        </button>
      </CartTotalStyle>
    </>
  );
}
