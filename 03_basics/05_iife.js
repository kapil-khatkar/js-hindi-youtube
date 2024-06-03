//Immediately Invoked Function Expression (IIFE)
// (func(){})()//execution call

// why use of iife =>
// 1> to stop the pollute from global scope
// 2> to use immediately

//____________function
function dB() {
    console.log("DB connected");
}
dB();

//_______IIFE (function) (named IIFE)
(function dB2() {
    //named IIFE
    console.log("DB connected...2");
})();


//_______Arrow function with IIFE_____
//unNamed IIFE
((name)=>{
    console.log(`DB connected...3 ${name}`);
})(`kapil`);
