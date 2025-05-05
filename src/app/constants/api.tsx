
import axios from "axios";

export const Rickapi = axios.create({
    baseURL: "https://rickandmortyapi.com/api"
});