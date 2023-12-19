const winston = require("winston");
const path = require("path");

const logsFolder = "logs";

// Define the logger configuration
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(), // Include a timestamp with each log entry
    winston.format.json() // Use JSON format for log entries
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: path.join(logsFolder, "error.log"),
      level: "error",
    }),
    new winston.transports.File({
      filename: path.join(logsFolder, "combined.log"),
    }),
  ],
});

module.exports = logger;
