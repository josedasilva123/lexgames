import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import GameFilters from ".";
import { CatalogContext } from "../../../../contexts/CatalogContext/CatalogContext";
import { GamesContext } from "../../../../contexts/GamesContext/GamesContext";

const mockCategories = ["RPG", "MMORPG", "Shooter"];

describe("<GameFilters />", () => {
  it("should render with filters options and no selected filter", () => {
    render(
      <CatalogContext.Provider value={{ newCategories: mockCategories }}>
        <GamesContext.Provider value={{ filter: "" }}>
          <GameFilters />
        </GamesContext.Provider>
      </CatalogContext.Provider>
    );

    const filters = screen.getAllByRole("button");
    const allButton = screen.getByText("Todos");

    expect(filters).toHaveLength(4);
    expect(allButton).toHaveClass("sc-bczRLJ hoyupM");
  });

  it("should render filters options with Shooter selected", () => {
    render(
        <CatalogContext.Provider value={{ newCategories: mockCategories }}>
          <GamesContext.Provider
            value={{ filter: "Shooter" }}
          >
            <GameFilters />
          </GamesContext.Provider>
        </CatalogContext.Provider>
    );

    const shooterButton = screen.getByText("Shooter");
    expect(shooterButton).toHaveClass("sc-bczRLJ hoyupM");
  });

  it("should fire a setState action when button event is fired", async () => {
    const setFilterMock = jest.fn();

    render(
      <CatalogContext.Provider value={{ newCategories: mockCategories }}>
        <GamesContext.Provider
          value={{ filter: "Shooter", setFilter: setFilterMock }}
        >
          <GameFilters />
        </GamesContext.Provider>
      </CatalogContext.Provider>
    );

    const allButton = screen.getByText("Todos");
    fireEvent.click(allButton);

    await waitFor(() => {
      expect(setFilterMock).toHaveBeenCalledTimes(1);
    });
  });

  it("should match with snapshot", () => {
    const { container } = render(
      <CatalogContext.Provider value={{ newCategories: mockCategories }}>
        <GamesContext.Provider value={{ filter: "" }}>
          <GameFilters />
        </GamesContext.Provider>
      </CatalogContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
