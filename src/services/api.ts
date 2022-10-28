import axios from "axios";

export const externalApi = axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/",
  timeout: 10000,
  params: { id: "452" },
  headers: {
    "X-RapidAPI-Key": "b1395d8af2msh098d7b17bf67052p1800b5jsn943afb0321b7",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
});

export const coreApi = axios.create({
  baseURL: "https://lx-games-api.onrender.com/",
  timeout: 15000,

});
