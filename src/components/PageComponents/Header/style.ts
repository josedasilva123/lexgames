import styled from "styled-components";

export const StyledHeader = styled.header`
   border-bottom: 1px solid var(--color-lightblue);
   
  .headerFlexBox {
    padding: 0.4rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 span {
    color: var(--color-lightblue);
  }

  .headerControls {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  nav{
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  nav span{
    margin-left: 10px;
    font-weight: 700;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 24px;
    height: 24px;

    border-radius: 255px;

    background: var(--color-lightblue);
  }
  @media (max-width: 760px){
    .headerFlexBox {
      flex-direction: column;
    }  
  }
  @media (max-width: 500px){
    .headerFlexBox {
      gap: 1rem;
    }  
    .headerControls{
      flex-direction: column;
    } 
    nav{
      flex-direction: column;
    }
  }
`;
