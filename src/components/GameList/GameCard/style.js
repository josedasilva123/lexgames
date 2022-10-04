import styled from "styled-components";

export const StyledGameCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  padding: 2rem;
  border: 1px solid var(--color-white);

  h3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 46px;
  }
`;
