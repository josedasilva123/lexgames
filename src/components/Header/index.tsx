import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledButton } from "../../styles/button";
import { StyledContainer } from "../../styles/global";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { StyledHeader } from "./style";

const Header = () => {
  const { user, userLogout } = useContext(UserContext);
  return (
    <StyledHeader>
      <StyledContainer containerSize="large">
        <div className="headerFlexBox">
          <StyledTitle tag="h1" fontSize="one">
            Lex<span>games</span>
          </StyledTitle>
          <div className="headerControls">
            <StyledParagraph>{user?.name}</StyledParagraph>
            <StyledButton buttonStyle="outline" onClick={() => userLogout()}>
              Sair
            </StyledButton>
          </div>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
