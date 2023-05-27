import { CartStyle } from "./cartStyle";
import { CartProduct } from "../CartProduct";

export function Cart({ currentSale, setCurrentSale, cartTotal, setCartTotal }) {
  return (
    <CartStyle>
      <div className="headerCart">
        <h2>Carrinho de compras</h2>
      </div>
      <CartProduct currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </CartStyle>
  );
}
