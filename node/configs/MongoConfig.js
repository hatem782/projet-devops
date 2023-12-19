var mongoose = require("mongoose");

module.exports.ConnectMongo = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err));
};

// with docker : mongodb://mongodb:27017/bd
// without docker : mongodb://127.0.0.1:27017/db
