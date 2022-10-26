import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { StyledButton } from "../../../styles/button";
import { StyledContainer } from "../../../styles/global";
import {
  StyledLink,
  StyledParagraph,
  StyledTitle,
} from "../../../styles/typography";
import { StyledHeader } from "./style";

const Header = () => {
  const { user, userLogout, favoriteList } = useContext(UserContext);
  return (
    <StyledHeader>
      <StyledContainer containerSize="large">
        <div className="headerFlexBox">
          <StyledTitle tag="h1" fontSize="one">
            <Link to="/dashboard">
              Lex<span>games</span>
            </Link>
          </StyledTitle>
          <div className="headerControls">
            <nav>
              <StyledLink to="/dashboard">
                  Início
              </StyledLink>
              <StyledLink to="/favorites">
                Meus favoritos
                <span>
                  {favoriteList.length}
                </span>
              </StyledLink>
            </nav>
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
