//__________________nums___________________//
const score = 400;
console.log(score);

const balance = new Number(100.5);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.89967;
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//____________________MATHS___________________//

console.log(Math);
console.log(Math.abs(-4)); // 4 // remove -ve to +ve
console.log(Math.round(4.3)); //4 //round off
console.log(Math.ceil(4.3)); //5 //round off ceil
console.log(Math.floor(4.3)); //4 //round off floor
console.log(Math.sqrt(4)); // 2
console.log(Math.min(4, 3 ,8 ,6)); // 3
console.log(Math.max(4, 3 ,8 ,6)); // 8

console.log(" Random ",Math.random()); 
console.log(" random from 1 tp 10 ",(Math.random()*10) +1);
console.log(" Ran frm 1 to 1o ",Math.floor(Math.random()*10) +1);

const min = 10;
const max = 20;

console.log(" Ran frm 10 to 20 ",Math.floor(Math.random() * (max - min +1))+ min);