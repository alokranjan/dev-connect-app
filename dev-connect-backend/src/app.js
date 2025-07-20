const express = require("express");

const app = express();

//this is request handler

app.use("/",(req,res) =>{
    res.send("Hello from express server root");
})

app.use("/test",(req,res) =>{
    res.send("Hello from express server root");
})

app.use("/hello",(req,res) =>{
    res.send("Hello from express server hello ssssss ");
})

app.listen(3000, () => {
    console.log("server is listening successfully at 3000.........");
});