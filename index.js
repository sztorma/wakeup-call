var express = require('express');
var app = express();

app.listen(3000, function(){
    console.log("Listening on port 3000!")
  });

var http = require("http");
setInterval(function() {
    http.get("http://site.tormaszabolcs.hu");
    http.get("http://db-manager-spring.herokuapp.com/");
    console.log("wake up neo")
}, 300000); // every 5 minutes (300 000)

