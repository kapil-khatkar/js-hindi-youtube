//for Each

//for each with function
const coding = ['js','ruby','java','py','cpp'];

coding.forEach( function (item) {
    console.log(item);
} )

console.log("\n");

//for Each with Arrow function
coding.forEach( (item,index, arr) =>{
    console.log(item,index,arr);
} );

console.log("\n");

//for Each with function reference
function printMe(item){
    console.log(item);
}

coding.forEach(printMe); //only reference

console.log("\n");

// [{},{},{}]
const myCoding =[
    {
        langName:'JavaScript',
        langFileName:'js'
    },
    {
        langName:'python',
        langFileName:'py'
    },
    {
        langName:'Java',
        langFileName:'java'
    }
]

myCoding.forEach((item)=>{
    console.log(item.langName);
})

// __forEach will not return any value
// const code=["Flutter","Kotlin","C#"]
// const values=code.forEach((item)=>{
//     console.log(item);
//     return item; //cant access return 
// })

// console.log(values);


//___filter
const myNums =[1,2,3,4,5,6,7];
const newNums = myNums.filter((num)=>num>4)
console.log(newNums);

const newNums2 = myNums.filter((num)=>{
    return num>4
});
console.log(newNums2);

//___forEach 
const newNum =[];
myNums.forEach((num)=>{
    if (num>4) {
        newNum.push(num)
    }
})

console.log(newNum);
