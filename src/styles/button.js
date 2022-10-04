/* eslint-disable default-case */
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    border-radius: 255px;

    border: 1px solid;

    transition: 0.4s;

    ${({buttonSize}) => {
        switch(buttonSize){
            case "big":
                return css `
                    padding: 0 32px;
                    height: 56px;
                `
            default: 
                return css`
                    padding: 0 24px;
                    height: 48px;
                `
        }
    }}

    ${({buttonStyle}) => {
        switch(buttonStyle){
            case "solid1":
                return css`
                    background: var(--color-blue);
                    border-color: var(--color-blue);
                    color: var(--color-white);
                `
            case "solid2":
                return css`
                    background: var(--color-lightblue);
                    border-color: var(--color-lightblue);
                    color: var(--color-white);
                `
            case "outline":
                return css`
                    border-color: var(--color-lightblue);
                    color: var(--color-white);
                `        
        }
    }}

    &:hover{
        filter: brightness(1.2);    
    }
`