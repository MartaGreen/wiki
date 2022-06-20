import { CityRequestType } from "../types/cityRequest.types";

export async function getCityByName(cityName: string) {
  try {
    const response: Response = await fetch(
      // `https://ru.wikipedia.org/w/api.php/?action=query&list=search&utf8=&format=json&origin=*&srsearch=${searchedString}`,
      // `https://en.wikipedia.org//w/api.php?action=query&format=json&origin=*&list=search&srsearch=${searchedString}`,
      `https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&explaintext=true&exsectionformat=plain&exintro=true&titles=${cityName}`,
      {
        headers: {
          "Content-Type": "application/json",
          Origin: "https://ru.wikipedia.org",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Unable to get data. Status: ${response.status}`);
    }

    const data: CityRequestType = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getUserCity() {
  try {
    const response: Response = await fetch("http://api.sypexgeo.net/json/");

    if (!response.ok)
      throw new Error(`Unable to get user city. Status: ${response.status}`);

    const data = await response.json();
    return data.city.name_ru;
  } catch (err) {
    console.error(err);
    return null;
  }
}
