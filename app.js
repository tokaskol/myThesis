const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const _ = require("lodash");
const favicon = require("serve-favicon");

//express app
const app = express();

//port
const port = process.env.PORT || 3000;
//listen to port 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//routes
const indexRoute = require("./routes/index");
app.use("/", indexRoute); 

// register view engine
app.set("view engine", "ejs");


// connect to mongodb & listen for requests
const db = require("./models/db");  

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});


module.exports = app;

