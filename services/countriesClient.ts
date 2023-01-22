import axios from "axios";

// V2 version is used because it has filter options

export const countriesClient = axios.create({
  baseURL: "https://restcountries.com/v2/",
});
