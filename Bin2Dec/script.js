let button = document.querySelector('button');

button.addEventListener('click', tranform);

function tranform(){
    let number = document.getElementById('number').value;
    
    number = String(number);

    // Check if there is a digit greater than 1
    let isBinary = true;
    let num = 0;
    for(let i = 0;i < number.length;i++){
        if(number[i] != '0' && number[i] != '1') isBinary = false;
        else if(number[i] == '1') num += Math.pow(2, number.length - i - 1);
    }

    if(!isBinary){
        alert("O número não está na forma binária");
    }else{
       document.getElementById('result').innerHTML = '<p> O numero em decimal é ' + num + ' </p>'
    }

}