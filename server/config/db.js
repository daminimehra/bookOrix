let mongoose = require("mongoose");
const dbPath = "mongodb://localhost:27017/bookSellDonate";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(dbPath, options)
  .then((res) => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Db Connect Err", err);
  });
