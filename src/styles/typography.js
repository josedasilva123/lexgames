/* eslint-disable default-case */
import styled, { css, keyframes } from "styled-components";
import { BaseTitle } from "./components/typography";

/* Para criação de animações, o Styled components tem o retorno keyframes */
export const fadeIn = keyframes`
    20%{
        opacity: 0;
    } 
    50%{
        opacity: 5;
    }
    100%{
        opacity: 1;
    }
`

export const StyledTitle = styled(BaseTitle)`
    font-weight: 700;
    color: ${(props) => props.fontColor}; /* utilizando o valor da props como valor de color */
    animation: ${fadeIn} .6s forwards;

    /* Regra condicional com props, o CSS se altera com base no valor da prop */
    ${({fontSize}) => {
        if(fontSize === "one"){
            return css`
                font-size: 40px;

                @media (max-width: 800px){
                    font-size: 30px;
                }
            `
        } else if (fontSize === "two"){
            return css`
                font-size: 34px;

                @media (max-width: 800px){
                    font-size: 26px;
                }   
            `
        } else if (fontSize === "three"){
            return css`
                font-size: 28px;

                @media (max-width: 800px){
                    font-size: 22px;
                }   
            `
        }
    }}

`

/*
.title{
    font-weight: 700;
}

.title.one{
    font-size: 40px;
}

.title.two{
    font-size: 34px;
}

.title.three{
    font-size: 28px;
}

@media (max-width: 800px){
    .title.one{
        font-size: 30px;
    }
    .title.two{
        font-size: 26px;
    }
    .title.three{
        font-size: 22px;
    }
}

.paragraph{
    font-weight: 400;
    font-size: 16px;
}

*/