import axios from "axios";
import cheerio from "cheerio";
import dataUrl from "../../url/data.js";

const scrapeMatchday = async (league) => {
  const url = dataUrl.matchdays[league];
  console.log(url, league);

  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const matchesData = [];

    $('div[data-testid="atom-template-sections"] > div').each((_, section) => {
      const date = $(section)
        .find('div[data-testid="template-section-title"] > div > div')
        .text()
        .trim();

      $(section)
        .find('div[data-testid="organism-matches"] > div')
        .each((__1, matchDiv) => {
          const homeTeamName = $(matchDiv)
            .find(
              'div[data-testid="team-match-score-atom-container-team-home-content-box"] > div'
            )
            .first()
            .text()
            .trim();
          const awayTeamName = $(matchDiv)
            .find(
              'div[data-testid="team-match-score-atom-container-team-away-content-box"] > div'
            )
            .first()
            .text()
            .trim();
          let homeTeamLogo = $(matchDiv)
            .find(
              'div[data-testid="team-match-score-atom-container-team-home-content-box"] picture img'
            )
            .attr("src");
          let awayTeamLogo = $(matchDiv)
            .find(
              'div[data-testid="team-match-score-atom-container-team-away-content-box"] picture img'
            )
            .attr("src");
          const homeScore = $(matchDiv)
            .find(
              'div[data-testid="team-match-score-atom-container-score-content-box"]'
            )
            .first()
            .text()
            .trim();
          const awayScore = $(matchDiv)
            .find(
              'div[data-testid="team-match-score-atom-container-score-content-box"]'
            )
            .last()
            .text()
            .trim();
          const time =
            $(matchDiv)
              .find('span[data-testid="atom-match-card-content-info"]')
              .text()
              .trim() || "Not available";

          homeTeamLogo = homeTeamLogo.replace(/30x0/, "100x0");
          awayTeamLogo = awayTeamLogo.replace(/30x0/, "100x0");

          // Check if the match has been played by checking if both scores are present
          const played =
            homeScore !== "-" && awayScore !== "-" && time === "Not available";

          const match = {
            date,
            homeTeam: {
              name: homeTeamName,
              logo: homeTeamLogo,
              score: homeScore,
            },
            awayTeam: {
              name: awayTeamName,
              logo: awayTeamLogo,
              score: awayScore,
            },
            time,
            played,
          };

          matchesData.push(match);
        });
    });
    return matchesData;
  } catch (error) {
    console.error(error);
  }
};

export default scrapeMatchday;
