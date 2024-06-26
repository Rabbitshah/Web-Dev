const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname,"/public/CSS")));
app.use(express.static(path.join(__dirname,"/public/JS")));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "/views"));

app.get("/", (req,res)=> {
    res.render("home");
});

app.get("/ig/:username", (req,res)=> {
    const instaData = require("./data.json");
    let {username}= req.params;
    const data = instaData[username];
    res.render("instagram", {data});
});

app.get("/rolldice", (req,res)=> {
    let diceVal =Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs" ,{diceVal});
});



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});