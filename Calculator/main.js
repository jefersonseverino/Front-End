let panel = document.querySelector('.numbers');
let operations = document.querySelector('.operations');
let solve = document.getElementById('solve');
let screen_label = document.getElementById('screen-label');

let b = 0;
let IsNumber = false;

panel.addEventListener('click', Number);
operations.addEventListener('click', Operation);
solve.addEventListener('click', Solve);

function Number(value){
    const c = value.target.innerHTML;

    if(c == 'C'){
        document.getElementById('screen-label').innerHTML = '';
    }else{
        document.getElementById('screen-label').innerHTML += c;
        IsNumber = true;
    }

}

function Operation(value){
    const op = value.target.innerHTML;
    
    if(IsNumber){
        document.getElementById('screen-label').innerHTML += op;
        IsNumber = false;
    }

}

function Solve(){
    let resolve = screen_label.innerHTML;
    screen_label.innerHTML = (eval(resolve)*10000)/10000;
}