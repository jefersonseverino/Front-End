let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let change_time = document.getElementById('change');

start.addEventListener('click', Start);
pause.addEventListener('click', Pause);
reset.addEventListener('click', Reset);
change_time.addEventListener('click', ChangeFocusTime);

var timer, focus_time_min = 25, focus_time_sec = 0, Break = false, break_time_min = 5, break_time_sec = 0;
var min = focus_time_min, sec = focus_time_sec;
var audio = new Audio('alarm.mp3');

PrintTime();
document.getElementById('title').innerHTML = 'Focus Time';

function Start(){

    timer = setInterval(function(){

        PrintTime();

        if(sec == 0 && min == 0) {
            audio.play();
            Pause();
            if(!Break){
                document.getElementById('title').innerHTML = 'Break Time';
                min = break_time_min;
                sec = break_time_sec;
            }else{
                document.getElementById('title').innerHTML = 'Focus Time';
                min = focus_time_min;
                sec = focus_time_sec;
            }
            Break = !Break;
            PrintTime();
        }

        sec--;

        if(sec < 0){
            min--;
            sec = 59;
        }

    }, 1000);
}

function Pause(){
    clearInterval(timer);
}

function Reset(){
    Pause();
    if(Break){
        min = break_time_min;
        sec = break_time_sec;
    }else{
        min = focus_time_min;
        sec = focus_time_sec;
    }
    PrintTime();
}

function PrintTime(){
    document.getElementById('time').innerHTML = (min < 10 ? '0' + min : min ) + ':' + (sec < 10 ? '0' + sec : sec);
}

function ChangeFocusTime(){
    let new_time = document.getElementById('focus_time').value;
    min = new_time;
    PrintTime();
}
