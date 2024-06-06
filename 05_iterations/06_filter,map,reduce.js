//___________________filter()

//___filter
const myNums =[1,2,3,4,5,6,7];
const newNums = myNums.filter((num)=>num>4)
console.log(newNums); //[5,6,7]

const newNums2 = myNums.filter((num)=>{
    return num>4
});
console.log(newNums2); //[5,6,7]


//__________________map()
//____map
const myArr =[1,2,3,4,5,6,7,8];

const num =myArr.map((item)=>item);

const num2 =myArr.map((item)=>{ 
    return item
});
console.log(num);
console.log(num2);