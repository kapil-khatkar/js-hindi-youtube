
//____________rest operator_________//
//_______...____________________//
function calCartPrice(val1,val2,...num1) {
    return num1
}

console.log(calCartPrice(200,400,500,2000));

//__________func with obj

const user ={
    username :"sum",
    price:199,
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} & price is ${anyObject.price}`)
}

handleObject(user);

handleObject({
    username:"sam",
    price:999,
});


//_______func with array
const myNewArray = [200,500,700,800]
function returnVal(getArray) {
    return getArray[1];
}

console.log(returnVal(myNewArray));
console.log(returnVal([10,29,30]));