import styled from "styled-components";

export const CartStyle = styled.aside`

    width: 90%;
    height: 300px;
    background-color: var(--grey0);
    margin-top: 20px;

    .headerCart{
        background-color: var(--color-primary);
        height: 65px;
        color: #FFFFFF;
        padding-left: 20px;
        display: flex;
        align-items: center;
        font-size: var(--heading-size4);
        font-weight: var(--bold-weight);
    }

@media (min-width:811px) {
    width: 30%;
    margin-top: 30px;
    max-height: 465px;
    height: fit-content;
    max-height: 470px;
    background-color: var(--grey0);

    .headerCart{
        background-color: var(--color-primary);
        height: 65px;
        color: #FFFFFF;
        padding-left: 20px;
        display: flex;
        align-items: center;
        font-size: var(--heading-size4);
        font-weight: var(--bold-weight);
    }
}
 

`
