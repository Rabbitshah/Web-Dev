const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")

// app.use((req , res, next) => {
//     console.log("I am only for random");
//     next();
// });

const checkToken = (req, res, next) => {
let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};

app.get('/api', checkToken , (req , res)=>{
   res.send('data');
});

// logger
// app.use((req , res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

app.get('/' , (req , res)=>{
   res.send('hello from simple server :)');
});

app.get('/random' , (req , res)=>{
    res.send('This is a radom page');
 });

app.get("/err", (req,res) => {
    abcd = abcd;
});

app.get("/admin", (req,res) => {
    throw new ExpressError(403, "Access to admin is Forbidden");
});
 
app.use((err,req,res,next) => {
    let {status = 500, message = "Some Error Occured"} = err;
    res.status(status).send(message);
    // next(err);
});

//404 
app.use((req,res) => {
    res.status(404).send("Page not found!");
});

app.listen(8080, () => {
    console.log("server is listening to 8080");
  });
  