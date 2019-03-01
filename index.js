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
}, 1200000); // 1 minute (60 000)

