import styled from "styled-components";

export const StyledGameList = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    
    li{
        width: calc((100% - 4rem)/3);
    }

    @media (max-width: 1020px){
        li{
            width: 100%;
        }
    }

`