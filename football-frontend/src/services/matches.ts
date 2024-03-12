import axios from "axios";
import baseUrl from "./config/BASE_URL";

const BASE_URL = baseUrl;
interface MatchDayResponse {
  filter(arg0: (match: any) => boolean): unknown;
  status: boolean;
  message: string;
  data: {
    matches: Array<{
      date: string;
      time: string;
      homeTeam: {
        name: string;
        logo: string;
        score: string;
      };
      awayTeam: {
        name: string;
        logo: string;
        score: string;
      };
    }>;
  };
}

const MatchdayService = {
  getByLeague: async (league: string): Promise<MatchDayResponse> => {
    const response = await axios.get(`${BASE_URL}/matchday/${league}`);
    return response.data;
  },

  // Weitere Methoden können hier hinzugefügt werden, wenn nötig.
};

export default MatchdayService;
