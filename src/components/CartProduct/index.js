/* eslint-disable array-callback-return */
import { CleanDiv, Ul, Li } from "./cartProductStyle"
import { TotalCart } from "../CartTotal/index"

export function CartProduct({ currentSale, setCurrentSale, cartTotal, setCartTotal }) {

    function removeCart(id) {
        const newArr = currentSale.filter((element) => {
            if (element.id !== id) {
                return element;
            }
        });
        setCurrentSale(newArr);
    }

    return (
        <>
            <>

            </>
            {currentSale.length ? (
                <>
                    <Ul>
                        {currentSale.map((element) => (
                            <Li key={element.id}>
                                <div className="divStyle">
                                    <img src={element.img} alt={element.name} />
                                    <div className="divElement">
                                        <h3>{element.name}</h3>
                                        <span>{element.category}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeCart(element.id)}
                                    id={element.id}
                                    type="button"
                                >
                                    Remover
                                </button>
                            </Li>
                        ))}
                    </Ul>
                    <TotalCart currentSale={currentSale} setCurrentSale={setCurrentSale} cartTotal={cartTotal} setCartTotal={setCartTotal} />
                </>

            ) : (
                <CleanDiv>
                    <ul className="clean">
                        <p>Sua sacola está vazia</p>
                        <span>Adicione itens</span>
                    </ul>
                </CleanDiv>
            )}
        </>
    )
}