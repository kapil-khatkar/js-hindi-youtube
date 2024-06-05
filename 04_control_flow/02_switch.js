//___SWITCH statement___

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//_______switch statement
const month = 1;
 switch (month) {
    case 1:
        console.log("JANUARY");
        break;
    case 2:
        console.log("FEBRUARY");
        break;
    case 3:
        console.log("MARCH");
        break;
    case 4:
        console.log("APRIL");
        break;
 
    default:
        console.log("default case match");
        break;
 }

 //_________switch with string
 const months = "FEB";

 switch (months) {
    case "JAn":
        console.log("Jan");
        break;
    case "FEB":
        console.log("feb");
        break;
 
    default:
        console.log("default case");
        break;
 }
 
//____switch with getDay() method
 switch (new Date().getDay()-2) {
    case 0:
        day ="Sunday";
        console.log("today is ",day);
        break;
 
    case 1:
        day ="Monday";
        console.log("today is ",day);
        break;
 
    case 2:
        day ="Tuesday";
        console.log("today is ",day);
        break;
 
    case 3:
        day ="Wednesday";
        console.log("today is ",day);
        break;
    case 4:
        day ="Thursday";
        console.log("today is ",day);
        break;
    case 5:
        day ="Friday";
        console.log("today is ",day);
        break;
    case 6:
        day ="Saturday";
        console.log("today is ",day);
        break;
 
    default:
        console.log("looking forward to the weekend");
        break;
 }
 
//___switch case with__common code blocks
let key = 1;
switch (key) {
    case 1:
    case 2:
        console.log("welcome to switch");
        break;
    default:
        break;
}

//__switch case use __strict comparison(===)
let x = "0";
switch (x) {
    case 0:
        console.log("hlo case 0");
        break;

    default:
        console.log("no value found");
        break;
}