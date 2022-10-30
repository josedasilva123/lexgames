import { gameData, mapGameData } from ".";

describe("gameData", () => {
    it("should map data even if there is no data", () => {
        const data = mapGameData();
        expect(data[0].id).toBe(521);
        expect(data[0].title).toBe("Diablo Immortal");
        expect(data[0].thumbnail).toBe("https://www.freetogame.com/g/521/thumbnail.jpg");
        expect(data[0].short_description).toBe("Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.");
        expect(data[0].genre).toBe("MMOARPG");
    })
})