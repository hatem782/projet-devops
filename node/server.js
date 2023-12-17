const cluster = require("cluster");
const os = require("os");

// Vérifie si le processus actuel est le processus maître
if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  console.log(`Nombre de cœurs de processeur disponibles : ${numCPUs}`);

  // Crée une instance pour chaque cœur de processeur
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  const express = require("express");
  const port = 9000;
  const cors = require("cors");
  const bodyParser = require("body-parser");

  const { corstAllowAll } = require("./configs/corsConfig");
  const { ConnectMongo } = require("./configs/MongoConfig");
  const Routes = require("./routes/Task.routes");

  const app = express();

  app.use(cors(corstAllowAll));
  app.options("*", cors());
  app.use(bodyParser.json());

  app.use("/", Routes);

  app.get("/test", (req, res) => {
    res.send("<h1>Hello World</h1>");
  });

  app.listen(port, () => {
    console.log(`Node app listening on port ${port}`);
    ConnectMongo();
  });
}

// const express = require("express");
// const port = 9000;
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// dotenv.config();

// const { corstAllowAll } = require("./configs/corsConfig");
// const { ConnectMongo } = require("./configs/MongoConfig");
// const Routes = require("./routes/Task.routes");

// const app = express();

// app.use(cors(corstAllowAll));
// app.options("*", cors());
// app.use(bodyParser.json());

// app.use("/", Routes);

// app.get("/test", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });

// app.listen(process.env.PORT || 9000, () => {
//   console.log(` Node app listening on port ${port}`);
//   ConnectMongo();
// });
