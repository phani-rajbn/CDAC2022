//http module of Nodejs is used to create web server based apps that uses HTTP protocol to process web documents like html, css, and other web based content thru nodejs

const http = require("http")
const fruits = ["Apples", "Mangoes", "Oranges", "Bananas"]
//createServer API is used to create a server app on Nodejs and allow it to listen to a certain port no which should be unique to the machine
const server = http.createServer((req, res)=>{
  if(req.url != "favicon.ico"){
      res.write("<h1>Welcome to server programming</h1>");
      res.write("<hr/>")
      res.write(fruits.toString())
      res.end()//sending the data to the server. 
  }
  console.log(req.url)  
})
server.listen(1234)