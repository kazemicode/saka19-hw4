const express = require('express'); // import Express lib 
const app = express(); // reference provides access to Express methods -- name of function matches name of const above

app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); // specify the external src folder

/* Server listener with callback function that displays a message to signal Express is listening for requests */
//configuration for codeanywhere
app.listen("8081", "0.0.0.0", function(){
  console.log("Express Server is Running. . . ")
});

// // configuration for Heroku
// app.listen(process.env.PORT, process.env.IP, function(){
//   console.log("Express Server is Running. . . ")
// });
  
/* Creates the root route, which sends response when root folder of website is requested */
app.get("/", function(request, response){
  response.render("index.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});

app.get("/about.html", function(request, response){
  response.render("about.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});
app.get("/practical.html", function(request, response){
  response.render("practical.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});
app.get("/learn.html", function(request, response){
  response.render("learn.html"); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
});