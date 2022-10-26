import styled from "styled-components";

//Estilos menos dinâmicos também podem ser comtemplados no 

export const StyledFavoriteCard = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;    
    gap: 2rem;
    padding: 16px;
    border: 1px solid var(--color-lightblue);
    border-radius: 4px;

    .favoriteRating{
        display: flex;
        align-items: center;
        gap: .6rem;
        p{
            font-weight: 600;
        }
    }

    @media (max-width: 450px){
        align-items: flex-start;
        flex-direction: column;

        button{
            width: 100%;   
        }
    } 
`