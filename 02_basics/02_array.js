const marvel_heroes =["thor","ironman","spiderman","hulk","antman"];
const dc_heroes =["superman","batman","flash","green lantern","catwoman"];

marvel_heroes.push(dc_heroes);

console.log(marvel_heroes);
console.log(marvel_heroes[5][1]); //batman

//__________concat operator
const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

//______spread operator
const all_new_heroes =[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);

//__________flat operator_________sort out depth of array
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//_____________Array.isArray() => to check
console.log(Array.isArray("kapil"));
//_____________Array.from()    =>it convert 
//any value(string,object) to an array
console.log(Array.from("kapil"));
console.log(Array.from({name:"kapil"})); //interesting []

//_____________Array.of()
//similar like from
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));