//for in

//for in with object
const myObj ={
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby',
    Swift:'Swift by apple'
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
};

//for in with Array
const prog =['js','ruby','cpp','py','java'];

for (const key in prog) {
    console.log(prog[key]);
}

//for in with map//will not work
const map = new Map()
map.set('IN',"India");
map.set('US',"United States of America");
map.set('FR',"France");
map.set('RU',"Russia");
map.set('IN',"India"); //cant print

console.log(map);

// for (const key in map) {
//     console.log(key);
// }