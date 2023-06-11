const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req, res){

  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;

  console.log(firstName, lastName, email);
})



app.listen(3000, function(){
  console.log("server is running on port 3000.");
})

// mailchimp apikey
// c5fd117b5371e40bce69aba19aa9d6bf-us13
