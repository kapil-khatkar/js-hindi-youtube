// primitive datatypes
//======================================//
   //----------CALL BY VALUE---------//

//  7 types : STRING, NUMBER, BOOLEAN, NULL, 
//            UNDEFINED, SYMBOL, BigInt  
//=====================================//

// js is dynamically typed lang.
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
  //---------CALL BY REFERENCE--------//
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