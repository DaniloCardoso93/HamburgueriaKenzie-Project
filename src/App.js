import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Container, Main } from "./globalStyle";
import { ProductSection } from "./components/Products"
import { Cart } from "./components/Cart"
import { api } from "./service/api";


function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    api
      .get(`products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <Header
        products={products}
        setProducts={setProducts}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <Main>
        <Container>
          <ProductSection
            products={products}
            setProducts={setProducts}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            currentSale={currentSale} setCurrentSale={setCurrentSale}
          />
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
          />
        </Container>

      </Main>
    </>

  );
}

export default App;
