require("dotenv").config();
const express = require("express");
const app = express();
const app = require("cookie-parser");
const cors = require("cors");
const db = require("./db/db");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 8001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
db.dbConnect();

app.use("/v1/users", userRoutes);
app.listen(PORT, () => {
  console.log("server running on port" + PORT);
});
