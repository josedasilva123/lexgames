import axios from "axios";

export const api = axios.create({
    baseURL: 'https://www.freetogame.com/api/',
    timeout: 10000,
})