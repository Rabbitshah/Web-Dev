const express = require("express");
const app = express();
let port = 8080;


app.listen(port,  () => {
    console.log(`app is listening on ${port}`);
});

app.get("/", (req, res) =>{
    res.send("I am root");
} );

app.get("/apple", (req, res) =>{
    res.send("You contacted apple path");
} );

app.get("/orange", (req, res) =>{
    res.send("You contacted orange path");
} );

app.get("/:username/:id", (req, res) =>{
    let{ username , id }= req.params;
    res.send(`Welcome to the page of @${username}`);
} );

app.get("/search", (req, res) =>{
    let {q} = req.query; 
    if(!q){
        res.send("<h1>Nothing searched</h1>");
    }
    res.send(`Search results for query ${q}`);
} );
// app.use((req, res) => {
//     // console.log(req);
//     console.log("request recived"); 
//     res.send("This is a basic response");
// });