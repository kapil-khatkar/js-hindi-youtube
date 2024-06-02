//objects declare in 2 ways =>
    //Literals
    //constructor

//singleton //by constructor
//object.create

//_______object literals

    //____symbol
    const mySym = Symbol("key1");
    const mySym2 = Symbol("key2");

const jsUser ={
    name: "kapil",// key="it will be treated as string": value=>any value
    "full name":"kk",// this valu cant access by .
    mySym:"myKey1", //
    [mySym2]:"mykey2",//mySym2 is access as symbol here
    age:25,
    location:"hisar",
    email:"k@google.com",
    isLoggedIn:false,
    lastLogInDays:["Monday","Saturday"],
}
console.log(jsUser.email);
console.log(jsUser["email"]);//email =key ="string"
console.log(jsUser["full name"]);
console.log(jsUser.mySym);
console.log(typeof mySym);              //symbol
console.log(typeof jsUser.mySym,"\n"); // string

console.log(jsUser[mySym2]);
console.log(typeof mySym2);         //symbol
console.log(typeof jsUser[mySym2]); //string

jsUser.email = "kapil@chatgpt.com";// updating email

//_________freeze()
//Object.freeze(jsUser); //locked
jsUser.email ="kapil@microsoft.com"; //cant update
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello jsUser");
}
jsUser.greetingtwo = function(){
    console.log( `hello jsUser, ${this.name} `);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());