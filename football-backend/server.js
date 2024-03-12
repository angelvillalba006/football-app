import express from "express";
import cors from "cors";
import fetchCurrentMatchday from "./api/leagues/matchday.js";

const app = express();
const port = 3000;

app.use(cors());

// Function to extract routes from the Express app
function extractRoutes(layer) {
  if (layer.route) {
    return {
      route: layer.route.path,
      methods: layer.route.methods,
    };
  } else if (layer.name === "router" && layer.handle.stack) {
    return layer.handle.stack.map(extractRoutes);
  }
}

// Endpoint for getting all routes of the Express app
app.get("/", (req, res) => {
  const routes = app._router.stack.map(extractRoutes).flat();
  res.json(routes);
});

// Endpoint for fetching the current matchday of a specific league
// Now expects a league parameter in the URL
app.get("/matchday/:league", async (req, res) => {
  const { league } = req.params; // Extracting league from the URL parameters
  try {
    const matchdayData = await fetchCurrentMatchday(league); // Passing the league parameter to the function
    res.json(matchdayData);
  } catch (error) {
    res
      .status(500)
      .send(
        `Fehler beim Abrufen des aktuellen Spieltags für die Liga ${league}.`
      );
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
