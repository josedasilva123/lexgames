import styled, { css, createGlobalStyle } from "styled-components";

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

    fieldset{
      border: none;
    }

    a{
      color: unset;
      text-decoration: none;
    }

    :root{
        --color-blue: #4B60BB;
        --color-darkblue: #0D1F4B;
        --color-lightblue: #6E9FD3;
        --color-white: #FBFEFF;
        --color-red: #F55859;
    }

    body{
        background: var(--color-darkblue);
    }

    h1, h2, h3, h4, h5, h6, p, span, li, a{
      font-family: 'Roboto', sans-serif;
      color: var(--color-white);
    }
    
    .Toastify__toast-theme--dark{
      background: var(--color-darkblue);
      border: 1px solid var(--color-lightblue);
    }
`;

interface iStyledContainerProps{
  containerSize?: "small" | "large";
}

export const StyledContainer = styled.div<iStyledContainerProps>`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  ${({ containerSize }) => {
    switch (containerSize) {
      case "small":
        return css`
          max-width: 800px;
        `;
      case "large":
        return css`
          max-width: 1200px;
        `;
      default:
        return css`
          max-width: 1024px;
        `;
    }
  }}
`;
