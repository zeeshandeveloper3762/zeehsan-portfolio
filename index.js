const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./db/connectDB");
const port = process.env.PORT || 8080;
const routes = require("./routes/routes");
const path = require("path");
const DATABASEURL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/portfolio";

const app = express();

// mongodb setup
connectDB(DATABASEURL);

// setup for static files
app.use(express.static(path.join(process.cwd(), "public")));

// app.get("/", (req, res) => {
//   res.send("Welcome ");
// });
// ejs setup
app.set("view engine", "ejs");
app.set("views", "./views");

// creating routes
app.use("/", routes);

app.listen(port, () => {
  console.log(`server is running ..... ${port}`);
});
