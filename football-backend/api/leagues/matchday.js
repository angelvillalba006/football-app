import axios from "axios";
import cheerio from "cheerio";
import dataSources from "../../url/dataSources.js";

const getMatchDays = async (league) => {
  const url = `${dataSources.mainUrl.eurosport}${league}/${dataSources.subpaths.leagues.table}`;
  console.log(url);

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const matchDaysCount = {};

    $("tbody > tr").each((_, element) => {
      const gamesPlayed = $(element)
        .find("td")
        .eq(5) // Adjust the index as needed
        .text()
        .trim();

      if (!matchDaysCount[gamesPlayed]) {
        matchDaysCount[gamesPlayed] = 1;
      } else {
        matchDaysCount[gamesPlayed]++;
      }
    });

    // Sort and convert the keys from String to Number
    const sortedMatchDaysCount = Object.keys(matchDaysCount)
      .sort((a, b) => b - a)
      .reduce((acc, key) => {
        acc[key] = matchDaysCount[key];
        return acc;
      }, {});

    // Find the current matchday (the most occurred gamesPlayed)
    const currentMatchday = Math.max(
      ...Object.keys(sortedMatchDaysCount).map(Number)
    );
    const nextMatchday = currentMatchday + 1;

    // Add current and next matchday to the object
    const result = {
      ...sortedMatchDaysCount,
      currentMatchday,
      nextMatchday,
    };

    return result;
  } catch (error) {
    console.error(error);
  }
};

export default getMatchDays;
