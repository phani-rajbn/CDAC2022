const app = require("express")();//get the Express object. 
const mongo = require("mongodb").MongoClient;//for connecting to mongodb...
const parser = require("body-parser");//for handling posted data as body object. 
const cors = require("cors")
const root = __dirname;

app.use(parser.urlencoded({"extended":true}))//tell the format of the Body when its posted. 
app.use(parser.json())
app.use(cors())//enable cors to Ur application

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
    const id = parseInt(req.params.id)//Reads the Query string of the URL and extract the Id passed by the request. 
    db.collection("employees").find({"empId": id}).toArray((e, result)=> res.send(result))
})

app.post('/Employees', (req, res)=>{
    let empRec = req.body;
    console.log(empRec)
    db.collection("employees").insert(empRec);
    res.send("Employee inserted to the database")
})

app.delete("/Employees/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    db.collection("employees").remove({"empId": id});
    res.send("Employee deleted successfully")
})

app.put("/Employees", (req, res)=>{
    let rec = req.body;
    console.log(rec)
    //todo: add the mongodb code to update.
    res.send("Employee updated!!!")
})

//get method to extract the records from the server. 
//post method to insert the record
//put method to update the record
//delete method to delete the record.

// app.get("/EmpList", (req, res)=>{
//     res.sendFile(root + "/Employees.html");
// })

app.listen(1234, ()=>{
    console.log("Server is ready!!")
})

/*
To REad in React:
React Basics
Components: Stateless vs Statefull
Props and Refs.
Inner Components and Outer Components. 
Redux. 
Hooks in react.
State management
Calling REST service. 
*/
/*
What we learnt:
Nodejs: Creating Server environment
EXPRESS: Data Interactions
React/jQuery: UI of the Application
*/