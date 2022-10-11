module.exports = {
    testPathIgnorePatterns: ["/node_modules"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    testEnvironment: 'jsdom',
}