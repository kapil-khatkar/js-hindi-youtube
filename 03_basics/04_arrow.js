const user = {
    username:"kapil",
    price:999,

    welcomeMsg:function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMsg();
// user.username="sam";
// user.welcomeMsg();

console.log(this); // {} //here standalone engine node
//console.log(this); // window{...} => inside browser

//inside browser global object is "WINDOW OBJECT"

//____________________function with this
function child() {
    let username="kaps";
    console.log(this); //object [global]{{..},{..},}
    console.log(this.username); //undefined
    //this cant access in this case
}
child();

//____________________function(exp.) with this
const child2 =function () {
    let username="kaps";
    console.log(this); //object [global]{{..},{..},}
    console.log(this.username); //undefined
    //this cant access in this case
}
child2();

//_______________arrow func with this
const child3 =()=> {
    let username="kaps";
    console.log(this); //{}
    console.log(this.username); //undefined
    //this cant access in this case
}
child3();


//_____________ARROW FUNCTION______________//
//________explicit return
const addTwo =(num1,num2) =>{
    return num1 + num2;
}

console.log(addTwo(2,5));


//_____Arrow Func with __implicit return

const sumTwo =(num1,num2) => num1 + num2;
console.log(sumTwo(4,7));

//_______another way of ____implicit return
const sumOFTwo =(num1,num2) => (num1 + num2);
console.log(sumTwo(6,7));

//implicit return with objects
const username =(num1,num2) =>({username:"kapil"});
console.log(username());

//_____arrow with loop
// const myArray =[7,2,3,6,5,4];
// myArray.forEach(()=> {});