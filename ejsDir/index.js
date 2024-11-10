const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Server is listening through port ${port}..`);
});

app.use(express.static(path.join(__dirname, "/public/CSS")));
app.use(express.static(path.join(__dirname, "/public/JS")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Ensure you have a views folder containing the ejs templete you want to render

// Creating routes

app.get("/", (req, res) => {
  res.send("<h1>You are in Home Page.</h1>");
});

app.get("/dice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6 + 1);
  res.render("dice.ejs", { diceVal });
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");

  if (instaData[username]) {
    let person = instaData[username];
    res.render("insta.ejs", { person });
  } else {
    res.status(404).send("<h2>No such user exists</h2>");
  }
});

app.get("/apple", (req, res) => {
  res.render("apple.ejs"); // Renders the ejs templete
});
