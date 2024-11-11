const express = require("express");
const path = require("path")
const app = express();

const port = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/",(req,res)=>{
    app.use(express.static(path.join(__dirname, "..", "Frontend")));
})

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(
        `<h2>Hello ${user}, I got your password: ${password} through GET request form url </h2>`
    );
});

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(
        `<h2>Hello ${user}, I got your password ${password} through POST request form url</h2>`
    );
});


app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
