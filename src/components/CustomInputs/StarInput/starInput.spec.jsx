import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import StarInput from "."

describe("<StarInput />", () => {
    it("should render correctly with 5 stars", () => {
        render(
            <StarInput currentRating={5} />
        )
        const stars = screen.getAllByRole("img");
        
        expect(stars).toHaveLength(5);
    })

    it("should fire event with the correct param", async () => {
        const callbackMock = jest.fn();

        render(
            <StarInput currentRating={5} callback={callbackMock} />
        )        
        const stars = screen.getAllByRole("listitem");

        fireEvent.click(stars[0]);

        await waitFor(() => {
            expect(callbackMock).toBeCalledWith(1);
        })
    })

    it("should match with snapshot", () => {
        const { container } = render(
            <StarInput currentRating={5} />
        )        
        
        expect(container).toMatchSnapshot();
    })
})