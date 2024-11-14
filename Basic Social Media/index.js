const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server is listening to port : ${port}`);
});

let posts = [
  {
    username: "Alok Ranjan",
    content: "Hey, I am a VIT Student.",
  },
  {
    username: "Noman",
    content: "I love coding and development.",
  },
  {
    username: "Eve",
    content: "I ate very spicy food today.",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/", (req, res) => {
  res.send("<h1>This is you Home page</h1>");
});
