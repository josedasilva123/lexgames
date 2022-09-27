import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  input[type="text"],
  input[type="email"],
  select {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 0 24px;
    height: 46px;

    border: 1px solid var(--color-lightblue);

    color: var(--color-white);

    option{
        background: var(--color-darkblue);
    }

    &:placeholder{
        color: rgba(255,255,255, .5);
    }
  }
`;