const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./node_modules/.env" });
const app = express();
const routes = require("./Routes/ToDoRoute");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.use(routes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));