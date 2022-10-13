import axios from "axios";

export const externalApi = axios.create({
    baseURL: 'https://www.freetogame.com/api/',
    timeout: 10000,
})

export const coreApi = axios.create({
    baseURL: 'http://localhost:3030/',
    timeout: 15000,
})