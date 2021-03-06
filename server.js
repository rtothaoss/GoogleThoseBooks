const express = require("express");
const path = require("path");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3002;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds151416.mlab.com:51416/heroku_2qh2bpdj");



app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
