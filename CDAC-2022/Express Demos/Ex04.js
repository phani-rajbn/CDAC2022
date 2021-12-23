const app = require("express")();//get the Express object. 
const mongo = require("mongodb").MongoClient;//for connecting to mongodb...
const parser = require("body-parser");//for handling posted data as body object. 
const root = __dirname;

app.use(parser.urlencoded({"extended":true}))//tell the format of the Body when its posted. 
app.use(parser.json())

let db;
//Gets the db connection to the database
getConnection = ()=>{
    const url = "mongodb://localhost/sampledatabase"
    let mc = mongo.connect(url, (err, res)=>{
        if(err){
            console.error(err.message);
            return;
        }
        db = res.db("sampledatabase");
    })
}

getConnection();

/*
Gets the data from the employees collection, converts it into any array of JS objects and sends it as response to the caller.  
*/
app.get("/Employees", (req, res)=>{
    db.collection("employees").find().toArray((e, result)=>{
        res.send(result)//Returns data as JSON object Array.
    })
})

app.get("/Employees/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    db.collection("employees").find({"empId": id}).toArray((e, result)=> res.send(result))
})



app.get("/EmpList", (req, res)=>{
    res.sendFile(root + "/Employees.html");
})

app.listen(1234, ()=>{
    console.log("Server is ready!!")
})

