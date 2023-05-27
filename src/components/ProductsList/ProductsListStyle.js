import styled from "styled-components";

export const ProductsListStyle = styled.li`

border: 1px solid var(--grey20);
min-width: 210px;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 15px;
margin-bottom: 10px;
border-radius: 8px;

@media (min-width:811px) {
    width: 210px;
}

.divImg{
    width: 100%;
    background-color: var(--grey0);

     img{
        width: 90px;
        margin: 0 auto;
    }
    
}

.divContains{
display: flex;
justify-content: unset;
align-items: unset;
margin-left: 15px;
gap: 15px;

@media (min-width:811px) {
    flex-direction: column;
}

h3{
    font-size: var(--heading-size3);
    font-weight: var(--bold-weight);
}

small{
    font-size: var(--caption);
    font-weight: var(--normal-weight);
    color: var(--grey50);
}

p{
    color: var(--color-primary);
    font-size: var(--text);
    font-weight: var(--semibold-weight);
}

button{
    width: 106px;
    height: 40px;

    border: 2px solid var(--color-primary);
    background-color: var(--color-primary);
    border-radius: 8px;

    color: #FFFFFF;

    margin-bottom: 10px;

    cursor: pointer;
}
}


   

`