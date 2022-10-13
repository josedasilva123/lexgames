import { render, screen, waitFor } from "@testing-library/react"
import GameCard from "."

const mockGame = {
    thumbnail: "",
    title: 'League of Legends',
    short_description: 'Lorem ipsum'
}

const addGame = jest.fn();

describe("<GameCard />", () => {
    it("should render", () => {
        render(
            <GameCard game={mockGame} addGame={addGame} />            
        )

        const thumb = screen.getByRole("img");
        const heading = screen.getByText("League of Legends");
        const paragraph = screen.getByText("Lorem ipsum");
        const button = screen.getByRole("button");

        expect(thumb).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
        expect(paragraph).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    it("should match with the snapshot", () => {
        const { container } = render(
            <GameCard game={mockGame} addGame={addGame} />    
        )
        expect(container).toMatchSnapshot();
    })
})