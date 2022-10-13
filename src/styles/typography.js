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
        switch (fontSize){
            case "one":
                return css`
                font-size: 40px;

                @media (max-width: 800px){
                    font-size: 30px;
                }
            `

            case "two": 
                return css`
                    font-size: 34px;

                    @media (max-width: 800px){
                        font-size: 26px;
                    }   
                `
            
            case "three": 
                return css`
                    font-size: 34px;

                    @media (max-width: 800px){
                        font-size: 26px;
                    }   
                `
        }
    }}

`

export const StyledParagraph = styled.p`
    font-weight: 400;
    font-size: 16px;
`