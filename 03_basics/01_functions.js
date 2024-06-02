// function sayMyName(){
//     console.log("k");
//     console.log("a");
//     console.log("p");
//     console.log("i");
//     console.log("l");
// }

// sayMyName => reference
// sayMyName() => execute
//sayMyName();

function addTwoNum (num1,num2){ 
    //parameters (num1,num2)
    console.log(num1+num2);
}

addTwoNum(2,"a");  //Arguments
addTwoNum(2,null); //Arguments
const res =addTwoNum(2,4); // cant access func data
console.log(" result ",res);//output is undefined

//___________return____________//
// by using reutrn we can store the data 
//of a func into a variable
function addTwoNum2 (num1,num2){ 
    //parameters (num1,num2)
    let result = num1+num2;
    return result;
    console.log("not work");
    //unreachable code after return
}
const result = addTwoNum2(3,4)
console.log("Result 2 =",result);

//___________return____________//
function addTwoNum3 (num1,num2){ 
    return num1+num2;
}
console.log("Result 3 =",addTwoNum3(7,8));


function loginUsrMsg (username){
    // if(username === undefined){
    //     console.log("pls enter a username");
    //     return
    // }
    if(!username){
        console.log("pls enter a username");
        return
    }
    return `${username} just loggedIn`;
}
console.log(loginUsrMsg("kapil"));
console.log(loginUsrMsg()); // () => undefined


function loginUsrMsg2 (username ="user"){
    //if statement never execute as 
    //parameter value is already declared
    if(!username){
        console.log("pls enter a username");
        return
    }
    return `${username} just loggedIn`;
}


console.log(loginUsrMsg2()); // () => undefined
console.log(loginUsrMsg2("Sam")); // () => undefined
