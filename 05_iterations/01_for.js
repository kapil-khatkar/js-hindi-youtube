//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        console.log("5 is best number");
        continue;
    }
    console.log(element);
}
//console.log(element);

for (let i = 0; i < 10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop value ${i}`);
    }
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i+'*'+j+' = '+ i*j);
    }
    
}