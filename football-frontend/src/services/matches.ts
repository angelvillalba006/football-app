import axios from "axios";
import baseUrl from "./config/BASE_URL";

const BASE_URL = baseUrl;
interface MatchDayResponse {
  status: boolean;
  message: string;
  data: {
    matchday: string; // or number, depending on how you store it
    matches: Array<{
      date: string;
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
      time: string;
    }>;
  };
}

const MatchdayService = {
  get: async (league: string): Promise<MatchDayResponse> => {
    const response = await axios.get(`${BASE_URL}/matchday/${league}`);
    return response.data;
  },

  // Weitere Methoden können hier hinzugefügt werden, wenn nötig.
};

export default MatchdayService;
