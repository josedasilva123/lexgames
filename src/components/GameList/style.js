import styled from "styled-components";

export const StyledGrid = styled.div`
  width: 100%;  
`

export const StyledGameList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (max-width: 600px){
        gap: 16px;
    }    
`