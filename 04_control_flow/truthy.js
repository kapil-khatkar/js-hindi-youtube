const userEmail = ""; //empty string is false value
if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email \"\" ");
    //false output
}

const Array = []; // empty array is true value
if(Array){
    console.log("got empty Array []"); //true output
}else{
    console.log("Array");
}

//falsy values
//__false, 0, -0, BigInt 0n, "", null, undefined, NaN, 
// ! (NOT)

//__truthy values
// true, "0", 'false', " ", [], {}, function(){}
//

if(Array.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//__Nullish Coalescing Operator (??): null undefined
 let val1 ;
 val1 = 5 ?? 10;
 //val1 = null ?? 10;
 //val1 = undefined ?? 10;
 console.log(val1);


 //__Ternary Operator ?
 //condition ? true : false;

 const coldCoffee = 100;
coldCoffee <= 90 ? console.log("less than 90") : console.log("more then 90");