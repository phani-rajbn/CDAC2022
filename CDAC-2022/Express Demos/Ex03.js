//This example shows how to connect to mongodb database using nodejs. 
//Ensure that U have installed mongodb module thru npm to Ur local directory.
const mongo = require("mongodb").MongoClient;//Get the mongodb module.
const url = "mongodb://localhost/sampledatabase"//define the collection location. 

let database;
//Mongdb-Express-Angular-NodeJs Stack
mongo.connect(url, (err, mgCl)=>{
    database = mgCl.db("sampledatabase")//get the database
    database.collection("employees").find().toArray((e, res)=>{
        res.forEach((value)=>{
            //console.log(`${JSON.stringify(value)}`)
            console.log(`${value.empName} from ${value.empAddress}`)
        })
    })
})
