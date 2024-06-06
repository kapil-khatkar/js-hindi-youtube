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
const myArr =[1,2,3,4,5,6,7,8,9,10];

const num =myArr.map((item)=>item);

const num2 =myArr.map((item)=>{ 
    return item
});
console.log(num);
console.log(num2);

//Chaining with map & filter
const newNum = myArr
                .map((item)=>item *10)
                .map((item)=>item +1)
                .filter((item)=>item >=40)
console.log(newNum);

//___________________reduce()
//__reduce with function
const arr =[1,2,3,4];
const sum = arr.reduce(function(acc,currentVal){
    return acc + currentVal;
},0);
    
console.log(sum);
    
//__reduce with arrow func
const initialValue =0;
const sumWithInitial = arr.reduce(
    (accumulator,currentValue)=> accumulator + currentValue,
    initialValue
);
console.log(sumWithInitial);

const sumArrow = arr.reduce((acc,curr)=> acc + curr,0);
console.log(sumArrow);

//_________reduce()
const shoppingCart =[
    {
        itemName:'js course',
        price: 2999
    },
    {
        itemName:'py course',
        price: 999
    },
    {
        itemName:'mobile dev course',
        price: 5999
    },
    {
        itemName:'data science course',
        price: 12999
    },
]

const priceToPay= shoppingCart.reduce((acc,item)=>acc + item.price,0);

console.log(priceToPay);