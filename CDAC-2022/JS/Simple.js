console.log("Apple 123")

//What is a Function? Group of statements created for better modularity and can be used as a single statement(Calling of a function). 
//This is one of the ways of creating function in js. 
function addFunc(v1, v2) {
    return v1 + v2;
}

let subFunc = function(v1, v2){
    return v1 - v2;
}

const mulFunc = (v1, v2) => v1 * v2;

const divFunc = (v1, v2) => v1 / v2;

const operation = (v1, v2, operand) =>{
    switch (operand) {
        case "+":
            return addFunc(v1, v2);
        case "-":
            return subFunc(v1 , v2);
        case "*":
            return mulFunc(v1 , v2);
        case "/":
            return divFunc(v1 , v2);
    }
}

const $id = (element) => document.getElementById(element)

class Employee{
    constructor(id, name, address){
        this.empId = id;
        this.empName = name;
        this.empAddress = address;
    }
}

//Global data...
//CRUD based class:Add, Read, Update and Delete
class EmpData{
    data = [
        new Employee(123, "Phaniraj", "Bangalore"),
        new Employee(124, "Rashmi", "Mysore"),
        new Employee(125, "Gopal", "Mangalore"),
        new Employee(126, "Ramesh", "Mumbai")
    ];//Array of employees

    addEmployee(emp){
        let temp = this.data.find((e) =>e.empId == emp.empId)
        if(temp == undefined)
            this.data.push(emp)//add the element to the bottom of the list.
        else
            throw "Employee iD is duplicate"    
            //Similar to ArrayList<T>.add method of Java. 
    }

    deleteEmployee(id){
        //Find the matching record with that id. 
        let emp = this.data.find(emp => emp.empId === id);
        //Get the index of the record from the array. 
        let index = this.data.indexOf(emp);
        //remove the record
        this.data.splice(index, 1)
        // for (let index = 0; index < this.data.length; index++) {
        //     const element = this.data[index];
        //     if(element.empId == id){
        //         this.data.splice(index, 1);
        //         return;//Exit the function...
        //     }
        // }
    }
    updateEmployee(emp){
        let foundRec = this.data.find(selected => selected.empId == emp.empId);
        foundRec.empName = emp.empName;
        foundRec.empAddress = emp.empAddress
        //Dont modify the empId...
    }

    findAll(name){
        return this.data.filter(function(emp){
            return emp.empName.includes(name)
        });
        //includes is a function of string in JavaScript that will search for the included text in it. 
    }
    
    findById(id){
        return this.data.find((emp) => emp.empId == id);//returns the first occurance of the matching criteria.
    }
}
