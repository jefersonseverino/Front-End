let start = document.getElementById('start');
let stop = document.getElementById('stop');
let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let lights = document.getElementsByClassName('circle');
let change = document.getElementById('change');

let animationTime = 2;

start.addEventListener('click', Start);
stop.addEventListener('click', Stop);
increase.addEventListener('click', Increase);
decrease.addEventListener('click', Decrease);
change.addEventListener('click', Change);

function Start(){
    for(let i = 0;i < lights.length;i++){
        lights[i].style.animationPlayState = "running";
        lights[i].style.animationIterationCount = "infinite";
    }
    console.log(lights)
}

function Stop(){
    for(let i = 0;i < lights.length;i++){
        lights[i].style.animationIterationCount = 0;
    }
}

function Increase(){
    if(animationTime > 1){
        animationTime -= 1;
        for(let i = 0;i < lights.length;i++){
            lights[i].style.animationDuration = animationTime + 's';
        }
    }
}

function Decrease(){
    if(animationTime < 5){
        animationTime += 1;
        for(let i = 0;i < lights.length;i++){
            lights[i].style.animationDuration = animationTime + 's';
        }
    }
}

function Change(){
    alert('asd');
}