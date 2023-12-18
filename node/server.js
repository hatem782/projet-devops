// server.js
const express = require("express");
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

const server = app.listen(9000, () => {
  console.log(`Node app listening on port 9000`);
  ConnectMongo();
});

module.exports = server; // Export the server
