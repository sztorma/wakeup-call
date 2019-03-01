var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

var http = require("http");
setInterval(function() {
    http.get("http://site.tormaszabolcs.hu");
    http.get("http://db-manager-spring.herokuapp.com/");
    console.log("wake up neo")
}, 300000); // every 5 minutes (300 000)

