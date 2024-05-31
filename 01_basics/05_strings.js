const name ="kapil";
const repoCount = 25;

//console.log(name + repoCount +"value");

//backstips
//string interpolation
console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String(`kapil here`);

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(" ASCII Value = ",gameName.charCodeAt(1));
console.log(" ASCII NUMBER = ",gameName.codePointAt());
console.log(gameName.indexOf('p'));
console.log(gameName.blink());
console.log(gameName.fontcolor('red'));
const newStr = gameName.substring(0,3);
console.log(newStr);

const anotherStr = gameName.slice(-9,4);
console.log(anotherStr);

const newSt = "    k a p i l  ";
console.log(newSt.trim());

const url ="https://kapil.com//k3b708x";
console.log(url.replace("b7","-"));

console.log(url.includes("kapil"));

const newVal = "kapil-PC-com";
console.log(newVal.split("-"));
