import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import Header from "./";

const favoriteListMock = [];
const userMock = {
  name: "Funalo da Silva",
};
const userLogoutMock = jest.fn();

describe("<Header />", () => {
  it("should render correctly", () => {
    render(
      <BrowserRouter>
        <UserContext.Provider
          value={{
            user: userMock,
            favoriteList: favoriteListMock,
            userLogout: userLogoutMock,
          }}
        >
          <Header />
        </UserContext.Provider>
      </BrowserRouter>
    );
  });

  it("should fire userLogout on button click", async () => {
    render(
        <BrowserRouter>
          <UserContext.Provider
            value={{
              user: userMock,
              favoriteList: favoriteListMock,
              userLogout: userLogoutMock,
            }}
          >
            <Header />
          </UserContext.Provider>
        </BrowserRouter>
      );

      const logoutButton = screen.getByText("Sair");
      fireEvent.click(logoutButton);

      await waitFor(() => {
        expect(userLogoutMock).toBeCalledTimes(1);
      })
  })
});
