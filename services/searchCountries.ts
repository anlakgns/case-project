import { countriesClient } from "./countriesClient";

export const searchCountries = async (name: string) =>
  countriesClient.get(`name/${name}?fullText=true`);
