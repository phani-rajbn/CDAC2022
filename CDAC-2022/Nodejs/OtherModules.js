const util = require("util")//Used for string based operations in ur apps. 
const os = require("os")//Module for getting info about our OS...
const data = require("./randomData.json")//Get the JSON Data

const name ="Phaniraj"
const address ="RR Nagar, Bangalore"
const age = 45
const msg = util.format("My Name is %s from %s and I am %d years old", name, address, age)
console.log(msg)

///////////////////////////OS related operations////////////////
console.log("The machine name is " + os.hostname())
console.log("The machine'OS is " + os.type())
console.log("The current version of the OS is  " + os.version())
console.log("The machine is up and running for " + (os.uptime()/3600) + " hrs")
console.log("The machine has " + os.cpus().length + " CPUs in it" )
console.log("The Total memory of this mac is " + os.totalmem())
/////////////////////////Console based APIs////////////////////////////
// console.table([
//     {Name: "Phaniraj", Address: "Bangalore", Salary: 45000}
// ])
// console.table(data)//push the data into the table of the console.