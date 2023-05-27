import Logo from "../../assets/logo.svg";
import { Container } from "../../globalStyle";
import { HeaderStyle } from "./header";
import { ProductSection } from "../Products";

export function Header({
  products,
  setProducts,
  filteredProducts,
  setFilteredProducts,
}) {
  function search(event) {
    event.preventDefault();
    setFilteredProducts(
      products.filter((element) => {
        if (
          event.target.valor.value === element.category ||
          event.target.valor.value === element.name
        ) {
          return element;
        }
      })
    );
    event.target.valor.value = "";
  }

  return (
    <HeaderStyle>
      <Container>
        <img src={Logo} alt="BurguerKenzie" />
        <form onSubmit={search}>
          <input name="valor" type="text" placeholder="Digitar pesquisa" />
          <button type="submit">Pesquisar</button>
        </form>
      </Container>
    </HeaderStyle>
  );
}
