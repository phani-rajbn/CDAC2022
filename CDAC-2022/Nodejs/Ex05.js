//Demo on taking inputs from the user from Console.
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

function question(statement, resFunc){
    rl.question(statement, (answer) => {
        rl.close();
        return resFunc(answer)
    });
}

question("Enter the name", (res)=> console.log(res))
