var images = document.querySelectorAll(".image");
var unknow = document.querySelectorAll(".unknow");
var totalMoves = document.querySelector(".moves");
var time = document.querySelector(".time");
var restart = document.querySelector(".fa-rotate-right");
var win = document.querySelector(".win");

var eachImageCount;
var choice1 = -1, choice2 = -1;
var moves = 0;
var minutes = 0;
var seconds = 0;
var correctGuesses = 0;

for(let i = 1;i <= (images.length)/2;i++){
    eachImageCount = 0;
    while(eachImageCount < 2){
        var image = document.getElementById( Math.floor( Math.random() * images.length ) + 1 );
        if(image.style.backgroundImage == ""){
            image.style.backgroundImage = "url('images/img-" + i + ".png')";
            eachImageCount++;
        }
    }
}

for(let j = 0;j < unknow.length;j++){
    unknow[j].addEventListener('click', (event) => {
        event.target.style.display = "none"; 
        if(choice1 == -1) {
            choice1 = event.target.parentNode.id;
        }else{
            if(choice1 != event.target.parentNode.id){
                choice2 = event.target.parentNode.id;
                setTimeout(compare, 400);
            }
        }
    })
}


async function compare(){
    moves++;
    totalMoves.innerHTML = "Moves: " + moves;
    var firstPicture = document.getElementById(choice1);
    var secondPicture = document.getElementById(choice2);
    if(firstPicture.style.backgroundImage != secondPicture.style.backgroundImage){
        firstPicture.firstChild.style.display = "block";
        secondPicture.firstChild.style.display = "block";
    }else{
        correctGuesses++;
        if(correctGuesses == 8){
            win.style.display = "block";
        }
    }
    choice1 = choice2 = -1;
}

restart.addEventListener('click', () => {
    moves = minutes = seconds = correctGuesses = 0;
    totalMoves.innerHTML = "Moves: " + moves;
    win.style.display = "none";
    for(let j = 0;j < unknow.length;j++){
        unknow[j].style.display = "block";
    }
})


setInterval(() => {
    if(correctGuesses < 8){
        seconds++;
        if(seconds == 60){
            minutes++;
            seconds = 0;
        }
        time.innerHTML = (minutes < 10 ? '0' + minutes : minutes ) + ':' + (seconds < 10 ? '0' + seconds : seconds);
    }
}, 1000)

