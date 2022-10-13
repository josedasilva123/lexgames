import styled from "styled-components";

export const StyledGameFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;

  li {
    white-space: nowrap;
  }

  @media (max-width: 800px) {
    flex-wrap: unset;
    overflow-x: scroll;
    padding-bottom: 8px;
    margin-right: -16px;
  }
`;
