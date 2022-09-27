import { createGlobalStyle } from "styled-components";

//O Global style é uma ótima opção para reset
export const GlobalStyle = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    ul, ol, li{
        list-style: none;
    }

    img{
        max-width: 100%;
    }

    input, select{
        background: transparent;
        border: none;
    } 

    :root{
        --color-blue: #4B60BB;
        --color-darkblue: #0D1F4B;
        --color-lightblue: #6E9FD3;
        --color-white: #FBFEFF;
    }

    body{
        background: var(--color-darkblue);
    }

    h1, h2, h3, h4, h5, h6, p, span, li{
    font-family: 'Roboto', sans-serif;
    color: var(--color-white);
}
`;
