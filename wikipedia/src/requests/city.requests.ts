export async function getCityByString(searchedString: string) {
  try {
    const response: Response = await fetch(
      // `https://ru.wikipedia.org/w/api.php/?action=query&list=search&utf8=&format=json&origin=*&srsearch=${searchedString}`,
      // `https://en.wikipedia.org//w/api.php?action=query&format=json&origin=*&list=search&srsearch=${searchedString}`,
      `https://ru.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&explaintext=true&exsectionformat=wiki&titles=${searchedString}`,
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

    const data: any = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return {};
  }
}
