const canvas = document.getElementById('drawing-board');
const ctx = canvas.getContext('2d');

const color = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');
const rectange = document.getElementById('rectangle');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let paint = false;
let lineWeight = 2;
let startX, startY;


clear.addEventListener('click', () => {
    //Clear all screen.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

color.addEventListener('change', (event) => {
    //change color.
    ctx.strokeStyle = event.target.value;
});

weight.addEventListener('change', (event) => {
    //change line weight after action in page.
    lineWeight = event.target.value;
});


const draw = (event) => {
    if(!paint || rectange.checked) return ;
    ctx.lineWidth = lineWeight;
    ctx.lineCap = 'round';
    ctx.lineTo(event.clientX, event.clientY - canvasOffsetY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (event) => {
    paint = true;
    startX = event.clientX;
    startY = event.clientY;
});

canvas.addEventListener('mouseup', (event) => {
    paint = false;

    if(rectange.checked){
        ctx.strokeRect(startX, startY - canvasOffsetY, event.clientX - startX, event.clientY - startY );
    }

    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

