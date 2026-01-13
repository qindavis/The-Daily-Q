const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Docker is working 🎉" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});
``