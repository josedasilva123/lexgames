/* eslint-disable default-case */
import { Link  } from "react-router-dom";
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
    color: ${(props) => props.fontColor}; 
    animation: ${fadeIn} .6s forwards;

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

interface iStyledParagraphProps{
    error?: boolean;
}

export const StyledParagraph = styled.p<iStyledParagraphProps>`
    font-weight: 400;
    font-size: 16px;
    color: ${({error}) => error ? "var(--color-red)" : "var(--color-white)"};
`

export const StyledLink = styled(Link)`
    font-weight: 400;
    font-size: 16px;
    color: var(--color-white);
    transition: .3s;

    &:hover{
        color: var(--color-lightblue);
    }
`