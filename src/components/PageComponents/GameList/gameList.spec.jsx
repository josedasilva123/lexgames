import { render, screen } from "@testing-library/react";
import GameList from ".";
import { CatalogContext } from "../../../contexts/CatalogContext/CatalogContext";

const mockGameList = [
  {
    id: 521,
    title: "Diablo Immortal",
    thumbnail: "https://www.freetogame.com/g/521/thumbnail.jpg",
    short_description:
      "Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.",
    game_url: "https://www.freetogame.com/open/diablo-immortal",
    genre: "MMOARPG",
    platform: "PC (Windows)",
    publisher: "Blizzard Entertainment",
    developer: "Blizzard Entertainment",
    release_date: "2022-06-02",
    freetogame_profile_url: "https://www.freetogame.com/diablo-immortal",
  },
  {
    id: 517,
    title: "Lost Ark",
    thumbnail: "https://www.freetogame.com/g/517/thumbnail.jpg",
    short_description:
      "Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.",
    game_url: "https://www.freetogame.com/open/lost-ark",
    genre: "ARPG",
    platform: "PC (Windows)",
    publisher: "Amazon Games",
    developer: "Smilegate RPG",
    release_date: "2022-02-11",
    freetogame_profile_url: "https://www.freetogame.com/lost-ark",
  },
  {
    id: 516,
    title: "PUBG: BATTLEGROUNDS",
    thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg",
    short_description:
      "Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
    game_url: "https://www.freetogame.com/open/pubg",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "KRAFTON, Inc.",
    developer: "KRAFTON, Inc.",
    release_date: "2022-01-12",
    freetogame_profile_url: "https://www.freetogame.com/pubg",
  },
  {
    id: 508,
    title: "Enlisted",
    thumbnail: "https://www.freetogame.com/g/508/thumbnail.jpg",
    short_description:
      "Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
    game_url: "https://www.freetogame.com/open/enlisted",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Gaijin Entertainment",
    developer: "Darkflow Software",
    release_date: "2021-04-08",
    freetogame_profile_url: "https://www.freetogame.com/enlisted",
  },
];

describe("<GameList />", () => {
  it("should render with 4 game cards", () => {
    render(
      <CatalogContext.Provider value={{ gameList: mockGameList}}>
        <GameList />
      </CatalogContext.Provider>
    );

    const itens = screen.getAllByRole("listitem");

    expect(itens).toHaveLength(4);
  });

  it("should match with snapshot", () => {
    const { container } = render(
      <CatalogContext.Provider value={{ gameList: mockGameList}}>
        <GameList />
      </CatalogContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
