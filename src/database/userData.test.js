import { mapUserData } from ".";

describe("userData", () => {
    it("should map valid data", () => {
        const data = mapUserData();
        expect(data.id).toBe('123');
        expect(data.name).toBe('Alex Conder');
        expect(data.email).toBe('alex321@emailfeliz.com');
        expect(data.favoriteGames).toEqual([]);
    })
})