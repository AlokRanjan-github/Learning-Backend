// Listen for incoming requests
// Parse
// Matches response with routes
// Response

const express = require("express");
const app = express();

// console.dir(app);
let port = 3000;
app.listen(port, () => {
  console.log(`Server is listening the port ${port}`);
});

/*
app.use((req, res) => {
  console.log("The request has been responded");
  // res.send("<h1>You have been responded as per you request</h1>");
  res.send({
    name: "Alok",
    course: "B.Tech",
  });
});

*/

app.get("/", (req, res) => {
  res.send("<h2>This is your root page.</h2>");
});

app.get("/alex", (req, res) => {
  res.send("<h2>This is Alex home page.</h2>");
});


app.get("/:username/:pass", (req, res) => {
  let { username, pass } = req.params;
  res.send(`Hello @${username}, Here is your Password: ${pass}`);
});

app.get("/search", (req, res) => {
  let {q} = req.query;
  if (!q) {
    res.send("Nothing matches you seach.");
  } else res.send(`You seached for : ${q}`);
});

app.get("*", (req, res) => {
  res.send("Its a generall astrik root page");
});