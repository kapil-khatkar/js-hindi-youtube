//singleton objects
    //declare object by constructor

//singleton
const tinderUser = new Object();
console.log(tinderUser);

//non - singleton //literals
const tinderUser1 ={};
//

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"kapil",
            lastname:"k",
        }
    }
}
console.log(regularUser.fullName.userFullName);


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj5 ={5:"a",6:"b"}

const obj3 = {obj1,obj2}
console.log(obj3);

//Object.assign(target,assign)
// it is a static method copies all own properties 
//from one or more src obj. to a target obj
const obj4 = Object.assign({},obj1,obj2,obj5);
console.log(obj4);

//spread Operator => ...
const obj6 ={...obj1,...obj2,...obj5};
console.log(obj6);


//when values coming from DB
const users=[
    {
        id:1,
        email:"k@gmail.com",
    },
    {
        id:1,
        email:"k@gmail.com",
    },
    {
        id:1,
        email:"k@gmail.com",
    },
    {
        id:1,
        email:"k@gmail.com",
    },
];

users[1].email;
console.log(tinderUser);

//______Object.keys()
console.log(Object.keys(tinderUser));// data type Array
console.log(Object.values(tinderUser));// data type Array

//______Object.enteries()
//______Array inside array___[[x:1,y:2]]
console.log(Object.entries(tinderUser));// data type Array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
