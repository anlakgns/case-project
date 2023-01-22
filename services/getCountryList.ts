import { countriesClient } from "./countriesClient";

export const getCountryList = async () =>
  countriesClient.get("all?fields=name,flags");
