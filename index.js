const express = require("express");
const app = express();
const router = express.Router();
const path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "home.html");
  console.log("home");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
  console.log("about");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
  console.log("cont");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3006,function(){
  console.log("The server is Ok");
});
