import styled from "styled-components";

export const CleanDiv = styled.div`
    min-height: 200px;
    ul{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    }


@media (min-width:811px) {
     height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: unset;
    align-items: unset;
}
`

export const Ul = styled.ul`
    min-height: 200px;
    height: fit-content;
    max-height:300px;
    overflow: auto;
    background-color: var(--grey0);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 10px;

`

export const Li = styled.li`
        width: 90%;
        height: 80px;
        display: flex;
        justify-content: space-between;


        img{
            width: 80px;
            background-color: var(--grey20);
        }

        .divStyle{
            display: flex;
            flex-direction: row;
            gap: 15px;
        }

        .divElement{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            height: 100%;
            align-items: unset;
            gap: 10px;

             h3{
                font-size: var(--heading-size3);
                font-weight: var(--bold-weight);
            }
            span{
                font-size: var(--caption);
                font-weight: var(--normal-weight);
                color: var(--grey50);
            }
        }

        button{
            background-color: transparent;
            height: 15px;

            font-size: var(--caption);
            font-weight: var(--normal-weight);
            color: var(--grey35);

            cursor: pointer;

        }

       

`
