import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animations";

export const StyledLoginGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 90vh;

  padding: 3rem 0;

  .formBox{
    padding: 2rem;
    width: 100%;
    max-width: 460px;
    border: 1px solid var(--color-lightblue);
    background: var(--color-darkblue);
    animation: ${AnimationFadeIn} .8s forwards;

    h1{
        margin-bottom: 1rem;
        span{
            color: var(--color-lightblue);
        }
    }

    & > a{
        display: block;
        margin-top: 1rem;

        width: 100%;

        button{
            width: 100%;
        }
    }

    @media (max-width: 600px){
        padding: 1.5rem;
    }
  }
`;
