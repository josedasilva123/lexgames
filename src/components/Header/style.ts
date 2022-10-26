import styled from "styled-components";

export const StyledHeader = styled.header`
   border-bottom: 1px solid var(--color-lightblue);
   
  .headerFlexBox {
    padding: 0.4rem 0;
    display: flex;
    justify-content: space-between;
  }

  h1 > span {
    color: var(--color-lightblue);
  }

  .headerControls {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
