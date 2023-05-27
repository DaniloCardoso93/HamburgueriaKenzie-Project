import { ProductsStyle } from "./productsStyle";
import { ProductList } from "../ProductsList";

export function ProductSection({
  products,
  setProducts,
  filteredProducts,
  setFilteredProducts,
  currentSale,
  setCurrentSale,
}) {
  return (
    <ProductsStyle>
      <ul>
        {filteredProducts.length ? (
          <ProductList
            products={filteredProducts}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          ></ProductList>
        ) : (
          <ProductList
            products={products}
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          ></ProductList>
        )}
      </ul>
    </ProductsStyle>
  );
}
