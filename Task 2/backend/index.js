/////////////////////////////////////////////////////////////////////////////////////////////////////////

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const csv = require("csv-parser");
const app = express();
const port = 5000;

app.use(cors());

app.get("/api/salary-data", (req, res) => {
  const results = [];
  fs.createReadStream("./dataset/salaries.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.json(results);
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
