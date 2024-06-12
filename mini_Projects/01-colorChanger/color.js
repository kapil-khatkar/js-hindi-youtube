//generate a random color
// by hex value

const rndmColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {     
    color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let inter;
const StartChngColor =function(){
    if (!inter) {
        inter =setInterval(chngBgColor,1000);
    }// if here to safety check for null
    function chngBgColor(){
    document.body.style.backgroundColor= rndmColor();
    }
}
const StopChngColor =function(){
    clearInterval(inter);
    inter = null; //to flush out
    // de-refrence value to null
}

document.querySelector('#start').addEventListener('click',StartChngColor);

document.querySelector('#stop').addEventListener('click',StopChngColor);