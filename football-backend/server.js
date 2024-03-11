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

// Endpoint for fetching the next matches of a league
app.get("/matchday", async (req, res) => {
  try {
    const matchdayNumber = await fetchCurrentMatchday();
    res.json({ matchday: matchdayNumber });
  } catch (error) {
    res.status(500).send("Fehler beim Abrufen des aktuellen Spieltags.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
