const express = require("express");

const app = express();//app is the instance of the express module.

const root = __dirname;

app.get("/", (req, res)=> res.send("Testing Express App!!"))//http://localhost:1234

app.get("/Home", (req, res)=> res.sendFile(root + "/HomePage.html"))

app.listen(1234, () => console.log("Server is up and running at 1234"))

/*
create a folder called ExpressDemo
inside it do the following things:
create the package.json file by running the followng command: npm init -y
install the express into Ur App which will create node_modules folder that has all node packages required for Express to work. 
npm install express
create a new Ex01.js file and write the above lines and test the code like any other nodejs app. 
15 years: play
15 30: Work really hard
30:45 : Implement what U have learned. 
45 should be retirement age. 
Phaniraj: 9945205684.
*/