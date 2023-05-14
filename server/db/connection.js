const mongoose = require("mongoose");

const url = process.env.URL;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb>> Connected to DB"))
  .catch((e) => console.log("MongoDb>> Error", e));
