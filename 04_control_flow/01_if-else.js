//control flow / logic flow / conditional flow

//____________if statement
const isUserLoggedIn = true;
if (isUserLoggedIn) {
    console.log("Welcome");
}


//_____________if-else
const temp =35;
if (temp<30) {
    console.log("Cold weather");
}else{
    console.log("hot weather");
}

//__comparison operators <, >, <=, >=, ==, !=,!==, ===
if(2 == "2"){
    console.log("executed");
}

if(2 === "2"){
    console.log("not executed");
}

// use of war
// const score =200;
// if (score>100) {
//     var power ="fly"; //var executes globally
//     console.log(`uder power : ${power}`);
// }

// console.log(`user power : ${power}`);

// const balance =1000;
// if (balance>500)console.log("test"),
// console.log("test 2");// this is unreadable code

//___________else-if
const bal = 500;
if (bal>500)console.log("test bal");

const balance2 = 950;
if(balance2<500){
    console.log("less than 500");
}else if(balance2<750){
    console.log("less than 750");
}else if(balance2<900){
    console.log("less than 900");
}else{
    console.log("less than 1000");
}

//__LOGICAL OPERATORS => && (AND), || (OR), ! (NOT)

//__________if with &&(AND) operators
const userLoggedIn=true;
const debitcard =true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitcard && 2==2) {
    console.log("user logged in (&&)");
}

//__________if with ||(OR) operators
if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in (||)");
}

//__________if with !(NOT) operators
if (!loggedInFromGoogle) {
    console.log("user logged in (!)");
}

//some extra operators
//__Nullish Coalescing operator (??)
let name = null;
let text = "missing";
let result = name ?? text;
console.log(result); //missing

//___optional chaining operator (?.)
const car={
    type:"fiat",
    model:"2014",
    color:"white"
};
console.log(car?.name); //undefined
console.log(car?.color); //white