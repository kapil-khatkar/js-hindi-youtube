// Execution context
// Calls Stack

    //__JavaScript Execution Context__//

// js runs any file in two phase
// {code} =>(build at first) Global EC --refer by---this---
// << this =>(variable) >>
// << this ==> inside Brower Env. => WINDOW OBJECT >>
// << JS IS SINGLE THREADED >>
// it(code) will execute on thread

//Global EC
//Function EC/ Functional EC
//Eval EC

        // {code} run into 2 phase
// 1> Memory Creation Phase/ Creation Phase
// it only allocated the memory to the declared variables
// (memory allocation)


// 2> Execution Phase
// code executing



//1> Global Execution / global Env.
    //it defines only once
//2> MCP/MP(memory phase)
    //val1 ->undefined 
    //val2 ->undefined
    // add ->definition //add(){...}
    //res1 ->undefined
    //res2 ->undefined

//3> Execution Phase
    //val1 -> 15
    //val2 -> 20
    //add  ->another EC
            // new variable env. 
            //        +
            // Execution thread
            //<< it will delete after its work done >>
    //back to MP
        //val1 -> undefined
        //val2 -> undefined
        //total-> undefined
    //move to EC
        //num1 -> 15
        //num2 -> 20
        //total-> 35
    //return back total to its Global EC
    //<< after delete of EP >>
    // res1 = 35
    // same concept repeat again in res2

let val1 = 15;
let val2 = 20;
function add(num1,num2) {
    return total = num1+num2;
} 
let res1 = add(val1,val2);
let res2 = add(5,4);

console.log(res1); //35


//_____________CALL STACK_____________//
//     LIFO -> last in first out
//
//                 three()-> removed after used
//             two()  -> removed after used
//         one()  -> removed after used
//   Global