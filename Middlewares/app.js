const express = require("express");
const app = express();

app.use((req , res) => {
    console.log("Hello, World!");
    res.send("middleware finished")
});

app.get('/' , (req , res)=>{
   res.send('hello from simple server :)');
});

app.get('/random' , (req , res)=>{
    res.send('This is a radom page');
 });

app.listen(8080, () => {
    console.log("server is listening to 8080");
  });
  