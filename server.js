
var express = require("express");
var mongojs = require("mongojs");
var axios = require("axios");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "bbc_scrape";
var collections = ["scrapedArticles"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("No articles to show");
});

// This grabs all the data from the scrapedArticles collection as a JSON.
app.get("/data", (request, response) => {
  db.scrapedArticles.find({}, (err, result) => {
    response.json(result);
  });
});

// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?

app.get("/scrape", (request, response) => {
  axios.get("http://www.bbc.com/").then(result => {

  var $ = cheerio.load(result.data);

  $("media-list__item media-list__item--1").each((i, element) => {

    var title = $(element).find("h3").text();
    var caption = $(element).find(".media__summary").text();
    var img = $(element).find("img").attr("src");

    // Save these results in an object that we'll push into the results array we defined earlier
    db.scrapedArticles.insert({
      title: title,
      caption: caption,
      img: img
      });
      console.log(title, caption, img);

    });
  });
  response.end();
});

/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
