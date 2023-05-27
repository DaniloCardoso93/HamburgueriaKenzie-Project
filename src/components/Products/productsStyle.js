import styled from "styled-components";

export const ProductsStyle = styled.section`

    width: 60%;
    margin-top: 30px;

    ul{
        display: flex;
        overflow-x: auto;
        gap: 20px;

        @media (min-width: 811px) {
            overflow-x: unset;
            flex-wrap: wrap;
        }
    }

`