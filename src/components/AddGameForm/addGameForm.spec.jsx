/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import AddGameForm from "."

const mockCategories = ["RPG", "MMORPG", "Shooter"]

describe("<AddGameForm />", () => {
    it("should render one option for each category", () => {
        render(
            <AddGameForm categories={mockCategories} />
        )

        const options = screen.getAllByRole("option");

        expect(options).toHaveLength(3);
    })

    it("should update input values", async () => {
        render(
            <AddGameForm categories={mockCategories} /> 
        )

        const name = screen.getByPlaceholderText("Digite o nome")
        const category = screen.getByText("RPG").parentElement;

        expect(name).toBeInTheDocument();
        expect(category).toBeInTheDocument();

        fireEvent.change(name, { target: { value: "League of Legends"}});
        fireEvent.change(category, { target: { value: "RPG"}});

        await waitFor(() => {
            expect(name).toHaveValue("League of Legends");
            expect(category).toHaveValue("RPG");
        })
    })

    it("should add game one time in submit event", () => {
        const addGameMock = jest.fn();
        
        render(
            <AddGameForm categories={mockCategories} addGame={addGameMock} /> 
        )
    })
})