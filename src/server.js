const http = require("http");
require("dotenv").config();
const app = require("./app");
const { loadPlanetsData } = require("./model/planets.model");
const { mongoConnect } = require("./services/mongo");
const { loadLaunchesData } = require("./model/launches.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchesData();

  server.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
  });
}

startServer();
