const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const date=require(__dirname+"/date.js")
const app = express();

// initializing the array to show the collection
var items = ["Cleaning", "Cooking", "Studing"];
var workItems=[];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
 let day= date();
  res.render("list", {listTitle: day,newItemAddeds: items});
});

app.get("/about",function(req,res){
res.render('about', {});
})
//Item from user entered is saved to array and the redirect to the home route so that added item will be displayed on the ejs template
app.post("/", function(req, res) {
  var item = req.body.newItem;
  if(req.body.list==="Work")

  {
    workItems.push(item);
    res.redirect("/work");
  }else
  {
    items.push(item);
    res.redirect("/");
  }


});

app.get("/work", function(req,res){
res.render("list",{listTitle:"Work List",newItemAddeds: workItems});
});



// console.log(today.toLocaleDateString("en-US")); // 9/17/2016
// var current_day=today.getDay();
// var day="";
// switch(current_day){
//   case 0: day="Sunday";
//   break;
//   case 1: day="Monday";
//   break;
//   case 2: day="Tuesday";
//   break;
//   case 3: day="Wenesday";
//   break;
//   case 4: day="Thursday";
//   break;
//   case 5: day="Friday";
//   break;
//   case 6: day="Saturday";
//   break;
//   default:
//   console.log("Error"+current_day);
//   break;
//
// }


app.listen(3000, function() {
  console.log("Server is running");
});
