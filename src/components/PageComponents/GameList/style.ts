import styled from "styled-components";

export const StyledGameList = styled.ul`
    width: 100%;
    display: grid;
    flex-wrap: wrap;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);   
    }

    @media (max-width: 550px){
        grid-template-columns: 1fr;
    }
    


`