import React, { useContext } from "react";
import LoadingSVG from "../../assets/Loading.svg";

import { UserContext } from "../../contexts/UserContext";

import { StyledGlobalLoading } from "./styles";

interface iGlobalLoadingProps {
  children: React.ReactNode;
}

const GlobalLoading = ({ children }: iGlobalLoadingProps) => {
  const { globalLoading } = useContext(UserContext);

  return (
    <>
      {globalLoading ? (
        <StyledGlobalLoading>
          <img src={LoadingSVG} alt="Loading..." />
        </StyledGlobalLoading>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default GlobalLoading;
