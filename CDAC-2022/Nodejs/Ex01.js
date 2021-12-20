console.log("Hello world from Nodejs")
//With Nodejs installed in UR OS, U can run the node command from UR terminal and execute UR JS applications. 
console.log("JS can now run from the Command Prompt")

//Functions in JS that has to be executed from the Node terminal:
function addFunc(first,second){
    return first + second
}
 //Anonymous methods in JS..
const mulFunc = function(first, second){
    return first * second;
}
//Lambda expression is an improvization of Anonymous method(Shortcut methods)
const subfunc = (first, second) => first - second

const remainder = (first, second) => first % second 
console.log(addFunc(123, 23))
console.log(subfunc(123, 23))
console.log(remainder(123, 23))

//To do: Create the functions in one file and use it in another JS file.
 