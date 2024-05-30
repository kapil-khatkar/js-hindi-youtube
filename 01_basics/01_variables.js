const accountId =1002;
let accountEmail ="kapil321@gmail.com";
var accountPassword = "1234";
accountCity ="Hisar";
let accountState;

//accountId= 67; //not allowed

accountEmail ="kapil21@gmail.com";
accountPassword = "1784";
accountCity ="Gurgaon";

/*
prefer not to use var
bcz of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);