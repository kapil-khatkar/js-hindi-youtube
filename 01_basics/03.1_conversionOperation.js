let score = "33abc";
let score2 = null;
let score3 = undefined;
let score4 = true;
let score5 = "kapil";

//"33" => 33
//"33abc" => NaN (not a number)(NaN type number)
//true => 1; false =>= 0

console.log(typeof (score));

let valueInNumber = Number(score);
let valueInNumber2 = Number(score2);
let valueInNumber3 = Number(score3);
let valueInNumber4 = Number(score4);
let valueInNumber5 = Number(score5);

console.log(score);
console.log(typeof score);
console.log(typeof valueInNumber);
console.log(valueInNumber,"\n"); //NaN

console.log(score2);
console.log(typeof score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2,"\n");

console.log(score3);
console.log(typeof score3);
console.log(typeof valueInNumber3);
console.log(valueInNumber3,"\n");

console.log(score4);
console.log(typeof score4);
console.log(typeof valueInNumber4);
console.log(valueInNumber4,"\n");

console.log(score5);
console.log(typeof score5);
console.log(typeof valueInNumber5);
console.log(valueInNumber5,"\n");

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

let isLoggedIn2 = "";
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2,"\n");

//1 => true, 0 => false
//"kapil" => true; "" => false

let num = 77;
let stringNum = String(num);
console.log(stringNum);
console.log(typeof stringNum);