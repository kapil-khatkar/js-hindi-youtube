// ARRAY
// Array is an object(datatype) in js, which enables storing
//collection of multiple items under a signle var. name

// JAVASCRIPT ARRAYS ARE RESIZABLE &
// can contain a mix of diff. data types.

// JS arrays are not associative arrays &
// so, array elements cant be accessed using
// arbitrary strings as indexes

//JS array-copy operations create SHALLOW COPIES
//A SHALLOW COPY OF AN OBJECT IS A COPY WHOSE PROPERTIES
//SHARE THE SAME REFRENCES

//_____ [] = bracket, 
//_____ {} = braces, curly braces
//_____ () = paranthesis;

const myArr = [0,1,2, true, "kapil"]; // 0,1,2 => elements
console.log(myArr,"\n");
const arr = [0,1,2,3,4];
const myHeroes = ["shaktiman","naagraj","doga"];

const arr2 = new Array(1,2,3,4);
console.log(arr2[0]);

//Array Methods
//____PUSH()_______add at end
//____POP()_______remove at end
arr2.push(5);
arr2.push(5);
arr2.pop(); 
console.log(arr2);

//____UNSHIFT()______add at start
//____SHIFT()______remove at start
arr2.unshift(9);
arr2.shift();
console.log(arr2);

//
console.log(arr2.includes(9));
console.log(arr2.indexOf(9)); //-1 mean value not exist
console.log(arr2.indexOf(2));


//_____join______=>bind + String
const newArr = arr2.join(); //join
console.log(arr2); //[1,2,3,4,5]
console.log(newArr);// 1,2,3,4,5

console.log(typeof arr2);  //object
console.log(typeof newArr); // string 

// slice => it dosent manipulate the original array
console.log("A ", arr2);

const my = arr2.slice(1,3);
console.log(my);
console.log("b ", arr2);

//splice => it manipulates the original array
const my2 = arr2.splice(1,3);
console.log("c",arr2);
console.log(my2);
