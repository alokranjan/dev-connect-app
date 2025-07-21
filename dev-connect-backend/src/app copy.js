const express = require("express");


const app = express();
const { authAdmin } = require("./middlewares/authenticate");

//these are request (basically handler here) handler

/*app.use("/",(req,res) =>{
    res.send("Hello from express server root");
 })
    // complex routing using wildcard "/ab?c" "/ab*cd"  "/ab+c" "/ab(cd)+ef"  regEx also can be used
    // dynamic  /user/:userId/:name
    //wrap in array will also work there are so much variation for routing
 app.use("/test",(req,res) =>{  
    res.send("Hello from express server root");
})
     app.use("/test",(req,res) =>{this route handler
})


app.use("/",(err,req,res,next) =>{ if 4 1st is treated as err, if 3 param mentioned then 1st will be req
    res.send("Hello from express server root");
 })
    */


//create a middleware to handle all the request type put, get, patch, post
//moved to authenticate.js
/* app.use("/admin", (req, res, next) => {
  const token = "xyz1";
  const isAdminAuthorized = token === "xyz";
  if (isAdminAuthorized) {
    res.status(401).send("Unautorized request. Please try later");
  } else {
    next();
  }
}); */
app.get("/admin", authAdmin);

app.get("/admin/getdata",authAdmin, (req, res) => {
  res.send("All admin data sent successfuly");
});

// (req, res) => {
 // res.send("All admin data sent successfuly");
//}  complete line called middleware fucntions

app.get("/admin/getdataerror",authAdmin, (req, res) => {
    try{
throw new Error("eroor new")
    }
    catch(error){
        res.status(500).send("error found")
    }
  res.send("All admin data sent successfuly");
});


app.listen(3000, () => {
  console.log("server is listening successfully at 3000.........");
});
