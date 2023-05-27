import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
html, body, header, h1, h2, h3, h4, div, nav, ul, li, img, p, section, article, a, button {
    padding: 0;
    margin: 0;
    list-style: none;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
}

    :root{
        --color-primary:#27AE60;
        --primary-primary-50:#93D7AF;
        --color-secondary: #EB5757;

        --grey0: #F5F5F5;
        --grey20: #E0E0E0;
        --grey35: #BDBDBD;
        --grey50: #828282;
        --grey100: #333333;

        --negative: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;

        --heading-size1: 26px;
        --heading-size2: 22px;
        --heading-size3: 18px;
        --heading-size4: 14px;

        --headline:16px;
        --text:14px;
        --caption:12px;


        --bold-weight:bold;
        --semibold-weight:600;
        --normal-weight:normal;

    }
`
export const Main = styled.main`

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 811px) {
        div{
        display: flex;
        flex-direction: unset;
        align-items: unset;
        justify-content: space-between;
    }
    }
 

`
export const Container = styled.div`

    max-width: 1200px;
    margin: 0 auto;

`

