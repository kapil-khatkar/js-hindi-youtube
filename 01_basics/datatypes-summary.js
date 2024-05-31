// primitive datatypes
//======================================//
   //__________CALL BY VALUE_________//
   //________ Duplicate data ________//

//  7 types : STRING, NUMBER, BOOLEAN, NULL, 
//            UNDEFINED, SYMBOL, BigInt  
//=====================================//

//________________js is dynamically typed lang.
const score = 100; //nbr
const scoreVal = 100.3; //nbr

const isLoggedIn = false;
const outsideTemp = null;
let user = undefined;
let user2; //undefined

const bigNumber = 3456755899667456n ;

console.log(typeof bigNumber);

//--------------- SYMBOL ------------------//
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); //false


// non - primitive datatypes(REFERENCE)
//=======================================//
  //_________CALL BY REFERENCE_________//
  //__________Original data_________//

//        ARRAY , OBJECTS , FUNCTIONS
//=======================================//

//-------------- ARRAY --------------//

const heroes = ["shaktiman","naagraj","doga","krrish","karma"];

console.log(typeof heroes);//object

//--------------- OBJECT ------------------//
let myObj ={
    name:"kapil",
    age:25,
};
console.log(typeof myObjbj); //object

//-------------- FUNCTION --------------//

// function by variable
 const cat = function name(params) {
    console.log("hello cat");
 }

console.log(typeof cat); //function (object func)

//*************************************************//

// Stack (Primitive)(copy data), Heap (Non - primitive)(original data)

let myName = "kk";
let anotherName =myName;
anotherName ="coffee";

console.log(myName);
console.log(anotherName);

let userOne ={
   email:"user@google.com",
   upi:"user@hpi",
};

let userTwo = userOne;
userTwo.email ="k@google.com";

console.log(userTwo);

console.log(userOne.email);
console.log(userTwo.email);