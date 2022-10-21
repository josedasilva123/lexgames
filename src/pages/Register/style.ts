import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animations";

export const StyledRegisterGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 90vh;

  padding: 3rem 0;

  .formBox {
    padding: 2rem;
    width: 100%;
    max-width: 460px;
    border: 1px solid var(--color-lightblue);
    background: var(--color-darkblue);
    animation: ${AnimationFadeIn} 0.8s forwards;

    & > a{
        display: block;
        margin-bottom: 1rem;
    }

    @media (max-width: 600px) {
      padding: 1.5rem;
    }
  }
`;
