const express = require("express");
const app = express();
const path = require("path");
const db = require("./database/database");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

db.authenticate()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => console.log("The error is " + error));

app.use("/users", require("./routes/user"));
app.use("/providers", require("./routes/provider"));
app.use("/transactions", require("./routes/transaction"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("./", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log("Listent at port " + PORT));
