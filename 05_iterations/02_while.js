//____WHILE LOOP

let i = 0;
while (i <= 5) {
    console.log(`value of  index is ${i}`);
    i += 2;
}

const myArray =  ["flash","batman","superman"];
let arr =0;
while(arr <myArray.length){
    console.log(`hero ${myArray[arr]}`);
    arr++;
}

//___Do-While

let score = 11;

do {
    console.log(`score is ${score}`);
    score++;
} while (score<=10);


//---break----statement---//with while loop
let j = 0;
while (j<=10) {
    if (j==5) {
        console.log("value of j break at ",j);
        break;
    }
    console.log("value of j is ",j);
    j++;
}

//----continue---statement---//with while loop
//in a while loop, the condition is tested,& 
//if it true, the loop is executed again
let k = 0;
while (k<=10) {
    k++;
    if (k == 5){
        console.log("value of k continue at ",k);
        continue;}
        console.log("value of k is ",k);
}


// do while
let index = 0;
do {
    index++;
    if (index==2) {
        console.log("continue at index ",index);
        continue;
    }
    console.log("index ",index);
} while (index<=5);