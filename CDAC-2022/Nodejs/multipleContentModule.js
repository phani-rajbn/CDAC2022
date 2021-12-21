//A module can have multiple kinds of logic in it like functions, data, objects and many more. 
module.exports.simpleFunc = function(){
    console.log("Testing Func")
}

//new ECMA(European Computer Manufactureres Association) SCRIPT-6 es6 syntax
class testClass{
    testFunc(){
        console.log("test Func from ES6")
    }
}
console.log(module.exports === exports)
exports.newFeature = testClass
exports.developedBy = "Phaniraj"
exports.developedOn = new Date();//Get the current date of the machine
exports.objectInstance = (function(){
  let data = [];
  function testFunc(){
      data.push("Apples");
      data.push("Mangoes");
      data.push("Oranges");
      data.push("PineApples");
      data.push("Bananas");
      console.log("The count of data is " + data.length)
  }
  return{
      testFunc
  }   
})();