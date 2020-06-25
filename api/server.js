const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const items = require("./routes/item");

//BodyParser

app.use(bodyParser.json());

app.use("/api/items", items);

// Serve static assets

app.use(express.static(path.join(__dirname, '../client/build')));

  /*
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });*/

  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});