//This Demo is to show how to handle static files inside the EXPRESS and handle Get and POst operations. 
const app = require("express")();
const parser = require("body-parser")//To parse the posted data from the Web Form. 

const root = __dirname;
//Adds the logic for the Express to process the body of the POSTED DATA from the web form. 
app.use(parser.urlencoded({extended:false}))//It is used if U want any specific format of body structure. If this is not sent, the body object of the request will not contain the posted data. 

//Data posted by the Form will be stored as body object into the request.  This will happen only if EXPRESS is using the body parser module. 


app.get("/", (req, res) => res.send("ROOT PAGE"))
app.get("/Home", (req, res) => res.sendFile(root + "/HomePage.html"))
app.get("/Register", (req, res) => res.sendFile(root + "/Registration.html"))

app.get("/AfterRegister", (req, res)=>{
    const name = req.query.txtName
    const address = req.query.txtAddr
    res.send(`${name} from ${address} is registered with Us!!!`)
})

app.post("/AfterRegister", (req, res)=>{
    if(req.body == null)
        res.send("No Data is posted into the server");
    else{
        const name = req.body.txtName;
        const address = req.body.txtAddr;
        res.send(`${name} from ${address} is registered with Us via POSTING!!!`)
    }
})

app.listen(1234, ()=>{
    console.log("EXPRESS IS RUNNING!")
})
