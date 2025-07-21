const express = require("express");
const app = express();
const { connectDB } = require("./config/database");
const User = require("./models/user");

app.use(express.json()); //json a another middleware

app.post("/signup", async (req, res) => {
    console.log(req.body)
 /*   const userObj = {
    firstName: "Alok",
    lastName: "Ranjan",
    emailId: "alok@gmail.com",
    password: "alok@1234",
  }; */ // _id is id  and __v is version created automatically
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User saved successfully");
  } catch (err) {
    res.status(400).send("error saving the user");
  } 
});

app.get("/user", async (req, res) => {
  console.log(req.body);
  const userEmail = req.body.emailId;
console.log(User)
  try {
    const user = await User.find({ emailId: userEmail });// will compare and return if matched
    //const user = await User.find({}); it will return all users
   //const user = await User.findOne({ emailId: userEmail }); 
    res.send(user);
  } catch (err) {
    res.status(400).send("error while getting the user");
  }
});

//app.delete(); //homework using findIdAnddelete of moongoose
// patch vs put     find by and update of moongoose
// // npm validator
/* const ALLOWED_UPDATES = ['gender','emailId']
const isUpdateAllowed = Object.keys(data).every((k) => ALLOWED_UPDATES.includes(k)
) 
allow a update based on that or thorw a error;

*/;

connectDB()
  .then(() => {
    console.log("Dtabase connection established.");
    app.listen(3000, () => {
      console.log("server is listening successfully at 3000.........");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });
