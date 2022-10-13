import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import React from "react"
import GameFilters from "."

const mockCategories = ["RPG", "MMORPG", "Shooter"]

describe("<GameFilters />", () => {
    it("should render with filters options and no selected filter", () => {
        render(
            <GameFilters categories={mockCategories} filter="" />
        )

        const filters = screen.getAllByRole("button");
        const allButton = screen.getByText("Todos");

        expect(filters).toHaveLength(4);
        expect(allButton).toHaveClass("sc-bczRLJ cTyziY");        
    })

    it("should render filters options with Shooter selected", () => {
        render(
            <GameFilters categories={mockCategories} filter="Shooter" />   
        )

        const shooterButton = screen.getByText("Shooter");
        expect(shooterButton).toHaveClass("sc-bczRLJ cTyziY");    
    })

    it("should fire a setState action when button event is fired", async () => {
        const setFilterMock = jest.fn();

        render(
            <GameFilters categories={mockCategories} filter="Shooter" setFilter={setFilterMock} />   
        )      

        const allButton = screen.getByText("Todos");
        fireEvent.click(allButton);
  

        await waitFor(() => {
            expect(setFilterMock).toHaveBeenCalledTimes(1);
        })
    })

    it("should match with snapshot", () => {
        const { container } = render(
            <GameFilters categories={mockCategories} filter="" />
        )

        expect(container).toMatchSnapshot();
    })
})