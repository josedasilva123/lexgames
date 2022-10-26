/* eslint-disable testing-library/await-async-query */
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import FavoriteCard from ".";
import { GamesContext } from "../../../../contexts/GamesContext/GamesContext";

const mockGame = {
  id: 1,
  title: "League of Legends",
  thumbnail: "https://example.com/image.png",
  genre: "MOBA",
  rating: 5,
};

const removeGame = jest.fn();

describe("<FavoriteCard />", () => {
  it("should contain all the game information", async () => {
    render(<FavoriteCard game={mockGame} />);
    const category = screen.getByText("MOBA");
    const title = screen.getByText("League of Legends");
    const rating = screen.getByText("5");

    expect(category).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(rating).toBeInTheDocument();
  });

  it("should fire event on click in remove button", async () => {
    render(
      <GamesContext.Provider value={{ removeGame }}>
        <FavoriteCard game={mockGame} />
      </GamesContext.Provider>
    );

    const removeButton = screen.getByText("Remover");

    fireEvent.click(removeButton);

    await waitFor(() => {
      expect(removeGame).toHaveBeenCalledTimes(1);
    });
  });

  it("should match with snapshot", () => {
    const { container } = render(<FavoriteCard game={mockGame} />);
    expect(container).toMatchSnapshot();
  });
});
