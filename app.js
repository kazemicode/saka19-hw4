const express = require('express'); // import Express lib 
const app = express(); // reference provides access to Express methods -- name of function matches name of const above

var faker = require('faker'); /* import faker pkg and store to var */


app.engine('html', require('ejs').renderFile);
app.use(express.static("public")); // specify the external src folder

/* Necessary to call function every time a new page is rendered so the quote/name will change */
function generateQuote(){
  var randomName = faker.name.findName(); /* name.findName() genrates random name */
  var quote = faker.hacker.phrase();
  var content = "\"" + quote + "\" - " + randomName
  return content;
}

/* Creates the root route, which sends response when root folder of website is requested */
app.get("/", function(request, response){
  response.render("index.ejs",
                 {quote: generateQuote()}); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
                  
});

/* Content pages to render */
app.get("/about.html", function(request, response){
  response.render("about.ejs",
                 {quote: generateQuote()}); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
                  
});
app.get("/practical.html", function(request, response){
  response.render("practical.ejs",
                 {quote: generateQuote()}); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
                 
});
app.get("/learn.html", function(request, response){
 response.render("learn.ejs",
                 {quote: generateQuote()}); // renders an HTML page. NOTE: In Node, all html files must be placed in /views
                 
});



 /* Server listener with callback function that displays a message to signal Express is listening for requests */
//configuration for codeanywhere
// app.listen("8081", "0.0.0.0", function(){
//   console.log("Express Server is Running. . . ")
// });

// // configuration for Heroku
  app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Express Server is Running. . . ")
});
