import { ProductsListStyle } from "./ProductsListStyle";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ProductList({ products, currentSale, setCurrentSale }) {
  function addCart(id) {
    products.find((element) => {
      if (element.id === id) {
        if (currentSale.length > 0) {
          if (!currentSale.includes(element)) {
            return setCurrentSale([...currentSale, element]);
          }
        } else {
          return setCurrentSale([...currentSale, element]);
        }
      }
    });
  }

  return (
    <>
      {products.map((element) => (
        <ProductsListStyle key={element.id}>
          <div className="divImg">
            <img src={element.img} alt={element.name} />
          </div>
          <div className="divContains">
            <h3>{element.name}</h3>
            <small>{element.category}</small>
            <p>
              {element.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <button
              onClick={() => addCart(element.id)}
              id={element.id}
              type="button"
            >
              Adicionar
            </button>
          </div>
        </ProductsListStyle>
      ))}
    </>
  );
}
