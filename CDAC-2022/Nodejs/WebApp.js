//This demo is used to show how nodejs is used to create a web app and host it. 
const http = require("http")
const fs = require("fs")
const httpParse = require('url').parse;
const root = __dirname;//Const in NODEJS that gives the path of the current directory. 

//Function that puts the file output as a stream of text and pushes it into the response. 
function displayPage(res, url){
    const file = root + url + ".html";//CurrentDir + fileName + extension will give the actual filename of UR project.
    fs.createReadStream(file).pipe(res)
}

function errorPage(res){
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.write("<h1>Error Page</h1>")
    res.write("<hr>")
    res.write("<h2>OOPS! SomeThing Wrong has happened.</h2>This file is not available with us!!!")
    res.end();
}

http.createServer((req, res)=>{
    if(req.method =="GET"){
        const query = httpParse(req.url).query;//First check if there is a query string
        if(query != null){
            let obj = httpParse(req.url, true).query;//Converts the query string into an json object. 
            const content = `Thanks!! Mr.${obj.txtName}.\nUR Address ${obj.txtAddr} and other details are stored with us!. We will come back to you`;
            res.write(content)
            res.end();
            return; 
        }
    }else if(req.method == "POST"){//data is an event of the req object which is triggered when a Page is posted to the server. 
        req.on("data", function(inputs){
            res.write(inputs);
            res.end()
        })
    }
    switch (req.url) {
        case "/favicon.ico":
            res.end()
            break;
        case "/HomePage":
            displayPage(res, req.url);
            break;
        case "/Registration":
            displayPage(res, req.url)
            break;
        case "/AboutUs":
            displayPage(res, req.url)
            break;
        default:
            errorPage(res);
            break;
    }
}).listen(1234);