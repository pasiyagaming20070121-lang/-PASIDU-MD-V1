const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "PASIDU MD V1",
    status: "running",
    message: "Bot backend is ready"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`PASIDU MD V1 server running on port ${PORT}`);
});
