let left = document.getElementById('left');
let right = document.getElementById('right');
let background = document.getElementById('image');
let image = 1;
let qtdImages = 4;
let height = 100;

left.addEventListener('click', slideLeft);
right.addEventListener('click', slideRight);

let timer = setInterval(slideRight, 5000);

function slideLeft(){
    image = (image - 1 + qtdImages) % 4;
    if(height == 100) changeBackground();
}

function slideRight(){
    image = (image + 1 + qtdImages) % 4;
    if(height == 100) changeBackground();
}

function changeBackground(){
    clearInterval(timer);
    animation();
    timer = setInterval(slideRight, 5000);
}

//Animation

function animation(){
    let off = false;
    
    let take = setInterval(function(){
        if(!off) height--;
        else height++;

        background.style.height = height + 'vh';

        if(height == 0){
            background.style.backgroundImage = "url('images/" + image + ".jpg')";
            off = true;
        }

        if(height == 100){
            clearInterval(take);
        }
    }, 5);

}
