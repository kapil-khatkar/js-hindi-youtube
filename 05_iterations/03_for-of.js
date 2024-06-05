//___for of loop
// mainly used for Array []

// ["","",""]
// [{},{},{}]

// for of with Array
const arr =[1,2,3,4,5];

for(const num of arr){
    console.log(num);
}

//for of with strings
const greeings = "Welcome";
for (const greet of greeings) {
    console.log(`Each char is ${greet}`);
}

// Maps
// unique values & also maintain sequencial order
const map = new Map()
map.set('IN',"India");
map.set('US',"United States of America");
map.set('FR',"France");
map.set('RU',"Russia");
map.set('IN',"India"); //cant print

console.log(map);

//map with for of
for (const key of map) {
    console.log(key); // Array form []   
}

//map with for of
for (const [key,value] of map) {
    console.log(key,'-',value); // Array form []   
}

//for of with object //will not work
const myObj ={
    game : 'NFS',
    game2: 'Spiderman',
    game3: 'Mario',
    game4: 'Contra',
};

// for (const [key, value] of myObj) {
//     console.log(key,'-',value);
// }