//A file of JS in Nodejs is called as module. In this example, the module is the name of the file(table.js)
//The name of the module is table.js
//Any module must export something, otherwise an empty object gets exported.
module.exports = function(num = 10){
    console.log(`Table for ${num} is :`)
    for (let index = 1; index <= 10; index++) {
        console.log(`${num} X ${index} = ${num * index}`)
    }//interpolation syntax of JS
} 

//Dont call here. It is to be exported and will be acquired by the other file using require api. 
//Try creating a function that calculates the Simple interest of a given pricipal amount. 