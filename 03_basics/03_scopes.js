//________________SCOPES_________________//

    //__Local Scope / block scope__//

    //_______Global Scope________//
    //to accees globally//

var c =300;

if (true) {
    let a = 10;    //local scope
    const b = 20;  //local scope
    var c = 30;    //global scope
    d = 40; // global scope
}

//console.log(a); //cant access
//console.log(b); //
console.log(c); //30
console.log(d); //40

let f = 300
if (true) {
    let f = 30
    console.log("inner ",f);
    function num(){
        let f = 30;
        return f;
    }
}
console.log(" func ",num());
console.log(f);


let array =[1,2,3,4]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(i);
}

//________closure________//
//when the child func can access the variable of parent func
function one () {
    const username = "kapil";
    function two() {
        const website ="youtube";
        console.log(username);
    }
    two();
    //console.log(website);
}

one();

//______
if (true) {
    const username="kapil";
    if (username === "kapil") {
        const website =" youtube";
        console.log(username+website);        
    }
    //console.log(website); //
}
//console.log(username); //


//++++++++++++++++  interesting  ++++++++++++++++++//
// __function
console.log(addOne(5)); //accessible
 function addOne(num) {
    return num + 1;    
 }
 

// __function here is as expression
//addTwo(5); //not access
 const addTwo = function (num) {
    return num + 2;
 }
