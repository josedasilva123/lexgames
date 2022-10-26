import styled from "styled-components";

export const StyledStarInput = styled.fieldset`
    span{
        cursor: pointer;
        transition: .3s;

        &:hover{
            filter: saturate(0) brightness(2);
        }
    }
`