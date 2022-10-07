import axios from "axios";

export const externalApi = axios.create({
    baseURL: 'https://www.freetogame.com/api/',
    timeout: 10000,
})

export const coreApi = axios.create({
    baseURL: 'https://lx-games-api.onrender.com/',
    timeout: 15000,
})