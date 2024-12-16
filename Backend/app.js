require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");

const PORT = process.env.PORT || 8001;

app.use(cors());

app.listen(PORT, () => {
  console.log("server running on port" + PORT);
});
