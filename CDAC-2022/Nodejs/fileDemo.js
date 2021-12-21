//To work with files U need to import the fs module

const fs = require("fs")//Only for custom modules we use ./ for std modules U directly refer the module name. 
/*********************Read a file synchronously*********************
const data = fs.readFileSync('./Ex04.js','utf8')//utf8 is the format of reading the text
//readFileSync api will read the contents of the file in the format specified and store it into a variable(data)
console.log(data)//displaying the data on the console.
**********************Read a file in asynchronous manner**********
fs.readFile("./fileDemo.js", 'utf8', function(err, data){
    if(err != null){
        console.error(err.mesage);
    }else{
        console.log(data)
    }
});
***********Writing to a file in JS**************
const filename = "MyFile.txt"
fs.writeFileSync(filename, "Some text in the file in text format", 'utf8');
***********Writing to a file in async *************
const filename = "MyFile.txt"
fs.writeFile(filename, "This is the conten that I want to replace in the file", (err)=>{
    if(err != null) console.log(err.message)
})
console.log("async call will not stop the app from continuing")
***************Appending the contents of the file****/
fs.open(filename, 'a+', function(err, fd){
    if(err != null){
        console.log(err.message)
    }else{
        let content = "Data in some format\n";
        fs.write(fd, content, (e, written, buffer)=>{
            fs.close(fd, ()=>{
                console.log("File writing is completed")
            })
        })
    } 
})
//Todo: Explore on fs.append API which is more improvised version of appending the file. 