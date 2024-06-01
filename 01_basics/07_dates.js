// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString(),"\n");

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString(),"\n");

console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString(),"\n");

console.log(typeof myDate); //object

//let myCreateDate = new Date(2023, 0, 23); // 0 => jan
//let myCreateDate = new Date(2023, 0, 23, 5, 3); // 0 => jan
//let myCreateDate = new Date("2023-01-14");//yy-mm-dd, 01 => jan
let myCreateDate = new Date("01-14-2023"); //dd-mm-yy, 01 => jan
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);// it starts from 0 so 6 = 5 , +1 solve it
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
});